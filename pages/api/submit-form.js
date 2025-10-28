import { WEB3FORMS_CONFIG } from '../../config/web3forms';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get IP address from request
    const ip = req.headers['x-forwarded-for'] || 
               req.headers['x-real-ip'] || 
               req.connection.remoteAddress || 
               req.socket.remoteAddress ||
               (req.connection.socket ? req.connection.socket.remoteAddress : null);

    // Get user agent and other metadata
    const userAgent = req.headers['user-agent'];
    const referer = req.headers.referer;
    const timestamp = new Date().toISOString();

    // Extract form data
    const { name, email, phone, serviceArea, service, message, formType } = req.body;

    // Prepare data for Web3Forms
    const web3formsData = {
      access_key: WEB3FORMS_CONFIG.accessKey,
      name,
      email,
      phone,
      serviceArea,
      service,
      message,
      to: WEB3FORMS_CONFIG.emails.to,
      subject: formType === 'contact' ? WEB3FORMS_CONFIG.subjects.contact : WEB3FORMS_CONFIG.subjects.quote,
      from_name: name,
      reply_to: email,
      // Include IP and metadata in the message
      message: `${message}\n\n--- TECHNICAL DETAILS ---\nIP Address: ${ip}\nUser Agent: ${userAgent}\nReferer: ${referer}\nTimestamp: ${timestamp}\nForm Type: ${formType}`,
    };

    // Submit to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(web3formsData),
    });

    if (response.ok) {
      // Log the submission for your records
      console.log('Form submission:', {
        name,
        email,
        phone,
        serviceArea,
        service,
        message,
        formType,
        ip,
        userAgent,
        referer,
        timestamp,
      });

      return res.status(200).json({ 
        success: true, 
        message: 'Form submitted successfully',
        ip: ip // You can include this if needed
      });
    } else {
      throw new Error('Web3Forms submission failed');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Form submission failed' 
    });
  }
}
