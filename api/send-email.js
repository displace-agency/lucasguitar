export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { studentType, ageRange, experience, instruments, genres, availabilityDays, availabilityTime, name, email, phone, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const subject = `New Lesson Inquiry — ${name} (${studentType === 'child' ? 'Child' : 'Adult'}, ${ageRange})`;

  const html = `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #2D2218;">
      <div style="background: #8A3819; padding: 24px 32px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #FFFFFF; font-size: 20px; margin: 0;">New Guitar Lesson Inquiry</h1>
      </div>
      <div style="background: #FFFFFF; padding: 32px; border: 1px solid #E8DFD3; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; font-size: 13px; color: #7A6E62; width: 140px;">Student Type</td>
            <td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${studentType === 'child' ? 'For a Child' : 'Adult Learner'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 13px; color: #7A6E62;">Age Range</td>
            <td style="padding: 8px 0; font-size: 14px;">${ageRange || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 13px; color: #7A6E62;">Experience</td>
            <td style="padding: 8px 0; font-size: 14px;">${experience || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 13px; color: #7A6E62;">Instruments</td>
            <td style="padding: 8px 0; font-size: 14px;">${instruments?.join(', ') || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 13px; color: #7A6E62;">Genres</td>
            <td style="padding: 8px 0; font-size: 14px;">${genres?.join(', ') || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 13px; color: #7A6E62;">Availability</td>
            <td style="padding: 8px 0; font-size: 14px;">${availabilityDays?.join(', ') || 'Not specified'} — ${availabilityTime || 'Not specified'}</td>
          </tr>
        </table>
        <div style="border-top: 1px solid #E8DFD3; padding-top: 20px; margin-bottom: 20px;">
          <h2 style="font-size: 15px; margin: 0 0 12px 0; color: #8A3819;">Contact Details</h2>
          <p style="margin: 4px 0; font-size: 14px;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 4px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #8A3819;">${email}</a></p>
          <p style="margin: 4px 0; font-size: 14px;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        </div>
        ${message ? `
        <div style="border-top: 1px solid #E8DFD3; padding-top: 20px;">
          <h2 style="font-size: 15px; margin: 0 0 8px 0; color: #8A3819;">Message</h2>
          <p style="font-size: 14px; line-height: 1.6; color: #2D2218;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        ` : ''}
      </div>
      <p style="font-size: 11px; color: #A69A8E; text-align: center; margin-top: 16px;">Sent from lucasterhaar.com booking wizard</p>
    </div>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Lucas Terhaar Guitar <noreply@mail.displace.agency>',
        to: ['t.lucas@posteo.de'],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    const data = await response.json();
    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error('Send error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
