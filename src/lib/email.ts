import nodemailer from 'nodemailer'

export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  subject: string
  message: string
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validateFormData(formData: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!formData.name.trim()) {
    errors.push('Name is required')
  }

  if (!formData.email.trim()) {
    errors.push('Email is required')
  } else if (!validateEmail(formData.email)) {
    errors.push('Please enter a valid email address')
  }

  if (!formData.subject.trim()) {
    errors.push('Subject is required')
  }

  if (!formData.message.trim()) {
    errors.push('Message is required')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

export async function createEmailTransporter() {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.verify()
    console.log('✅ SMTP connection verified successfully')
  } catch (error) {
    console.error('❌ SMTP verification failed:', error)
    throw error
  }

  return transporter
}

export function generateAdminNotificationHTML(formData: ContactFormData): string {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission - YUBIX Security</title>
      <style type="text/css">
        /* Mobile Responsive Styles */
        @media only screen and (max-width: 600px) {
          .email-container {
            width: 100% !important;
            margin: 0 !important;
          }
          .mobile-padding {
            padding: 20px !important;
          }
          .mobile-padding-small {
            padding: 15px !important;
          }
          .mobile-full-width {
            width: 100% !important;
            display: block !important;
          }
          .mobile-grid-item {
            display: block !important;
            width: 100% !important;
            margin-bottom: 15px !important;
          }
          .mobile-font-small {
            font-size: 14px !important;
          }
          .mobile-font-medium {
            font-size: 16px !important;
          }
          .mobile-font-large {
            font-size: 20px !important;
          }
          .mobile-button {
            display: block !important;
            width: 100% !important;
            margin: 0 0 10px 0 !important;
            text-align: center !important;
          }
          .mobile-spacing {
            margin-bottom: 20px !important;
          }
        }
        
        /* Desktop grid layout */
        @media all and (min-width: 600px) {
          .desktop-grid {
            width: 48% !important;
          }
        }
      </style>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0; padding: 20px;">
        <tr>
          <td class="mobile-padding">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-container" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); overflow: hidden;">
              
              <!-- Alert Header -->
              <tr>
                <td class="mobile-padding" style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); padding: 30px; text-align: center; color: white;">
                  <div style="background: rgba(255, 255, 255, 0.2); border-radius: 50%; width: 60px; height: 60px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                    <span style="font-size: 24px;">🚨</span>
                  </div>
                  <h1 class="mobile-font-large" style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700;">New Contact Form Submission</h1>
                  <p class="mobile-font-small" style="margin: 0; opacity: 0.9; font-size: 14px;">${currentDate}</p>
                </td>
              </tr>
              
              <!-- Contact Information -->
              <tr>
                <td class="mobile-padding" style="padding: 40px;">
                  <div class="mobile-padding-small mobile-spacing" style="background: #f8fafc; border-radius: 12px; padding: 30px; margin-bottom: 30px;">
                    <h2 class="mobile-font-medium" style="color: #1e293b; margin: 0 0 24px 0; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
                      <span style="background: #3b82f6; border-radius: 8px; padding: 8px; margin-right: 12px;">👤</span>
                      Contact Information
                    </h2>
                    
                    <!-- Mobile-responsive grid -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td class="mobile-grid-item desktop-grid" style="vertical-align: top; padding-right: 10px;">
                          <div style="background: white; border-radius: 8px; padding: 20px; border-left: 4px solid #3b82f6; margin-bottom: 15px;">
                            <p class="mobile-font-small" style="color: #64748b; font-size: 12px; font-weight: 500; margin: 0 0 4px 0; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</p>
                            <p class="mobile-font-small" style="color: #1e293b; font-size: 16px; font-weight: 600; margin: 0;">${formData.name}</p>
                          </div>
                        </td>
                        <td class="mobile-grid-item desktop-grid" style="vertical-align: top; padding-left: 10px;">
                          <div style="background: white; border-radius: 8px; padding: 20px; border-left: 4px solid #10b981; margin-bottom: 15px;">
                            <p class="mobile-font-small" style="color: #64748b; font-size: 12px; font-weight: 500; margin: 0 0 4px 0; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</p>
                            <p class="mobile-font-small" style="color: #1e293b; font-size: 16px; font-weight: 600; margin: 0; word-break: break-word;">
                              <a href="mailto:${formData.email}" style="color: #10b981; text-decoration: none;">${formData.email}</a>
                            </p>
                          </div>
                        </td>
                      </tr>
                      ${formData.company || formData.phone ? `
                      <tr>
                        ${formData.company ? `
                        <td class="mobile-grid-item desktop-grid" style="vertical-align: top; padding-right: 10px;">
                          <div style="background: white; border-radius: 8px; padding: 20px; border-left: 4px solid #8b5cf6; margin-bottom: 15px;">
                            <p class="mobile-font-small" style="color: #64748b; font-size: 12px; font-weight: 500; margin: 0 0 4px 0; text-transform: uppercase; letter-spacing: 0.5px;">Company</p>
                            <p class="mobile-font-small" style="color: #1e293b; font-size: 16px; font-weight: 600; margin: 0;">${formData.company}</p>
                          </div>
                        </td>` : '<td></td>'}
                        ${formData.phone ? `
                        <td class="mobile-grid-item desktop-grid" style="vertical-align: top; padding-left: 10px;">
                          <div style="background: white; border-radius: 8px; padding: 20px; border-left: 4px solid #f59e0b; margin-bottom: 15px;">
                            <p class="mobile-font-small" style="color: #64748b; font-size: 12px; font-weight: 500; margin: 0 0 4px 0; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</p>
                            <p class="mobile-font-small" style="color: #1e293b; font-size: 16px; font-weight: 600; margin: 0;">
                              <a href="tel:${formData.phone}" style="color: #f59e0b; text-decoration: none;">${formData.phone}</a>
                            </p>
                          </div>
                        </td>` : '<td></td>'}
                      </tr>` : ''}
                    </table>
                  </div>
                  
                  <!-- Message Details -->
                  <div class="mobile-padding-small mobile-spacing" style="background: #f8fafc; border-radius: 12px; padding: 30px; margin-bottom: 30px;">
                    <h2 class="mobile-font-medium" style="color: #1e293b; margin: 0 0 24px 0; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
                      <span style="background: #8b5cf6; border-radius: 8px; padding: 8px; margin-right: 12px;">💬</span>
                      Message Details
                    </h2>
                    
                    <div style="background: white; border-radius: 8px; padding: 20px; margin-bottom: 20px; border-left: 4px solid #8b5cf6;">
                      <p class="mobile-font-small" style="color: #64748b; font-size: 12px; font-weight: 500; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Subject</p>
                      <p class="mobile-font-medium" style="color: #1e293b; font-size: 18px; font-weight: 600; margin: 0;">${formData.subject}</p>
                    </div>
                    
                    <div style="background: white; border-radius: 8px; padding: 20px; border: 1px solid #e2e8f0;">
                      <p class="mobile-font-small" style="color: #64748b; font-size: 12px; font-weight: 500; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.5px;">Message Content</p>
                      <div class="mobile-font-small" style="color: #1e293b; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap; background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #64748b; word-break: break-word;">
                        ${formData.message}
                      </div>
                    </div>
                  </div>
                  
                  <!-- Quick Actions -->
                  <div style="text-align: center; margin: 30px 0;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 auto;">
                      <tr>
                        <td class="mobile-button" style="padding: 0 8px; text-align: center;">
                          <a href="mailto:${formData.email}?subject=Re: ${formData.subject}&body=Hi ${formData.name},%0A%0AThank you for contacting YUBIX Security." class="mobile-font-small" style="background: #3b82f6; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; display: inline-block;">
                            📧 Reply to ${formData.name}
                          </a>
                        </td>
                        ${formData.phone ? `
                        <td class="mobile-button" style="padding: 0 8px; text-align: center;">
                          <a href="tel:${formData.phone}" class="mobile-font-small" style="background: #10b981; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; display: inline-block;">
                            📞 Call ${formData.name}
                          </a>
                        </td>` : ''}
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td class="mobile-padding" style="background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                  <p class="mobile-font-small" style="color: #64748b; margin: 0; font-size: 12px;">
                    This notification was automatically generated by the YUBIX Security contact form system.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `
}

export function generateConfirmationEmailHTML(formData: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Welcome to YUBIX Security - Your Message Received</title>
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <![endif]-->
      <style type="text/css">
        /* Mobile Responsive Styles */
        @media only screen and (max-width: 600px) {
          .email-container {
            width: 100% !important;
            margin: 0 !important;
          }
          .mobile-padding {
            padding: 20px !important;
          }
          .mobile-padding-small {
            padding: 15px !important;
          }
          .mobile-text-center {
            text-align: center !important;
          }
          .mobile-full-width {
            width: 100% !important;
            display: block !important;
          }
          .mobile-grid {
            display: block !important;
            width: 100% !important;
          }
          .mobile-grid-item {
            display: block !important;
            width: 100% !important;
            margin-bottom: 15px !important;
          }
          .mobile-hide {
            display: none !important;
          }
          .mobile-font-small {
            font-size: 14px !important;
          }
          .mobile-font-medium {
            font-size: 16px !important;
          }
          .mobile-font-large {
            font-size: 22px !important;
          }
          .mobile-spacing {
            margin-bottom: 20px !important;
          }
          .mobile-button {
            display: block !important;
            width: 100% !important;
            margin: 0 0 15px 0 !important;
            text-align: center !important;
          }
          .mobile-button-table {
            width: 100% !important;
          }
          .mobile-trust-card {
            margin-bottom: 20px !important;
          }
        }
        
        /* Outlook specific styles */
        @media all and (min-width: 600px) {
          .desktop-grid {
            width: 48% !important;
          }
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .dark-mode-bg {
            background-color: #1e293b !important;
          }
          .dark-mode-text {
            color: #f1f5f9 !important;
          }
        }
      </style>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); min-height: 100vh;">
      <!-- Preheader Text -->
      <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: sans-serif; max-height: 0; max-width: 0; opacity: 0; overflow: hidden;">
        Thank you for contacting YUBIX Security. We've received your message and will respond within 24 hours.
      </div>
      
      <!-- Main Container -->
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0; padding: 0;">
        <tr>
          <td class="mobile-padding" style="padding: 40px 20px;">
            <!-- Email Container -->
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-container" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 20px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1); overflow: hidden;">
              
              <!-- Hero Header -->
              <tr>
                <td class="mobile-padding" style="position: relative; background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #7c3aed 100%); padding: 60px 40px; text-align: center;">
                  <!-- Decorative Elements -->
                  <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: rgba(255, 255, 255, 0.1); border-radius: 50%; opacity: 0.7;"></div>
                  <div style="position: absolute; bottom: -30px; left: -30px; width: 60px; height: 60px; background: rgba(255, 255, 255, 0.1); border-radius: 50%; opacity: 0.5;"></div>
                  
                  <!-- Logo/Brand -->
                  <div style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 16px; padding: 20px; display: inline-block; margin-bottom: 24px;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 800; letter-spacing: -0.5px;">YUBIX</h1>
                    <p style="color: rgba(255, 255, 255, 0.9); margin: 4px 0 0 0; font-size: 14px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase;">Security</p>
                  </div>
                  
                  <!-- Success Icon -->
                  <div style="background: rgba(34, 197, 94, 0.2); border: 2px solid rgba(34, 197, 94, 0.3); border-radius: 50%; width: 80px; height: 80px; margin: 0 auto 24px; display: flex; align-items: center; justify-content: center;">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="rgba(34, 197, 94, 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  
                  <h2 class="mobile-font-large" style="color: #ffffff; margin: 0 0 12px 0; font-size: 28px; font-weight: 700; line-height: 1.3;">Message Received Successfully!</h2>
                  <p class="mobile-font-medium" style="color: rgba(255, 255, 255, 0.9); margin: 0; font-size: 18px; font-weight: 400; line-height: 1.5;">Thank you for reaching out to our security experts</p>
                </td>
              </tr>
              
              <!-- Main Content -->
              <tr>
                <td class="mobile-padding" style="padding: 50px 40px;">
                  <!-- Greeting -->
                  <div class="mobile-spacing" style="margin-bottom: 40px;">
                    <h3 class="mobile-font-medium" style="color: #1e293b; margin: 0 0 16px 0; font-size: 24px; font-weight: 600;">Hello ${formData.name},</h3>
                    <p class="mobile-font-small" style="color: #64748b; line-height: 1.7; margin: 0; font-size: 16px;">
                      We've successfully received your message and our team of security experts is already reviewing your inquiry. 
                      You can expect a personalized response within 24 hours during business days.
                    </p>
                  </div>
                  
                  <!-- Message Summary Card -->
                  <div class="mobile-padding-small mobile-spacing" style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; margin: 32px 0; position: relative; overflow: hidden;">
                    <!-- Decorative gradient -->
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);"></div>
                    
                    <div class="mobile-text-center" style="display: flex; align-items: center; margin-bottom: 20px;">
                      <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); border-radius: 12px; padding: 12px; margin-right: 16px;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      <h4 class="mobile-font-small" style="color: #1e293b; margin: 0; font-size: 20px; font-weight: 600;">Your Message Summary</h4>
                    </div>
                    
                    <!-- Mobile-responsive grid -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td class="mobile-grid-item desktop-grid" style="vertical-align: top; padding-right: 10px;">
                          <div style="background: white; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 15px;">
                            <p class="mobile-font-small" style="color: #64748b; font-size: 14px; font-weight: 500; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Subject</p>
                            <p class="mobile-font-small" style="color: #1e293b; font-size: 16px; font-weight: 600; margin: 0;">${formData.subject}</p>
                          </div>
                        </td>
                        <td class="mobile-grid-item desktop-grid" style="vertical-align: top; padding-left: 10px;">
                          <div style="background: white; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 15px;">
                            <p class="mobile-font-small" style="color: #64748b; font-size: 14px; font-weight: 500; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                            <p class="mobile-font-small" style="color: #1e293b; font-size: 16px; font-weight: 600; margin: 0; word-break: break-word;">${formData.email}</p>
                          </div>
                        </td>
                      </tr>
                      ${formData.company || formData.phone ? `
                      <tr>
                        ${formData.company ? `
                        <td class="mobile-grid-item desktop-grid" style="vertical-align: top; padding-right: 10px;">
                          <div style="background: white; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 15px;">
                            <p class="mobile-font-small" style="color: #64748b; font-size: 14px; font-weight: 500; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Company</p>
                            <p class="mobile-font-small" style="color: #1e293b; font-size: 16px; font-weight: 600; margin: 0;">${formData.company}</p>
                          </div>
                        </td>` : '<td></td>'}
                        ${formData.phone ? `
                        <td class="mobile-grid-item desktop-grid" style="vertical-align: top; padding-left: 10px;">
                          <div style="background: white; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 15px;">
                            <p class="mobile-font-small" style="color: #64748b; font-size: 14px; font-weight: 500; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Phone</p>
                            <p class="mobile-font-small" style="color: #1e293b; font-size: 16px; font-weight: 600; margin: 0;">${formData.phone}</p>
                          </div>
                        </td>` : '<td></td>'}
                      </tr>` : ''}
                    </table>
                  </div>
                  
                  <!-- What's Next Section -->
                  <div class="mobile-padding-small mobile-spacing" style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 1px solid #f59e0b; border-radius: 16px; padding: 32px; margin: 32px 0;">
                    <div class="mobile-text-center" style="display: flex; align-items: center; margin-bottom: 20px;">
                      <div style="background: #f59e0b; border-radius: 12px; padding: 12px; margin-right: 16px;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 8V12L16 16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      <h4 class="mobile-font-small" style="color: #92400e; margin: 0; font-size: 20px; font-weight: 600;">What Happens Next?</h4>
                    </div>
                    <ul class="mobile-font-small" style="color: #92400e; font-size: 16px; line-height: 1.6; margin: 0; padding-left: 20px;">
                      <li style="margin-bottom: 8px;">Our security experts will review your inquiry within 2 hours</li>
                      <li style="margin-bottom: 8px;">You'll receive a personalized response within 24 hours</li>
                      <li style="margin-bottom: 8px;">For urgent matters, call our 24/7 hotline: <strong>+1 (555) 911-HELP</strong></li>
                    </ul>
                  </div>
                  
                  <!-- CTA Buttons -->
                  <div style="text-align: center; margin: 40px 0;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" class="mobile-button-table" style="margin: 0 auto;">
                      <tr>
                        <td class="mobile-button" style="padding: 0 10px;">
                          <a href="https://yubix.com" class="mobile-font-small" style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 12px; font-weight: 600; font-size: 16px; display: inline-block; box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.39); transition: all 0.3s ease;">
                            🌐 Visit Our Website
                          </a>
                        </td>
                        <td class="mobile-button" style="padding: 0 10px;">
                          <a href="tel:+15551234567" class="mobile-font-small" style="background: rgba(59, 130, 246, 0.1); color: #3b82f6; text-decoration: none; padding: 16px 32px; border-radius: 12px; font-weight: 600; font-size: 16px; display: inline-block; border: 2px solid #3b82f6;">
                            📞 Call Us Now
                          </a>
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
              
              <!-- Security Trust Indicators -->
              <tr>
                <td class="mobile-padding" style="background: #f8fafc; padding: 40px;">
                  <div style="text-align: center; margin-bottom: 30px;">
                    <h4 class="mobile-font-medium" style="color: #1e293b; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">Why Choose YUBIX Security?</h4>
                  </div>
                  
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td class="mobile-trust-card mobile-full-width" style="text-align: center; padding: 20px; vertical-align: top;">
                        <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); margin-bottom: 16px;">
                          <div style="background: linear-gradient(135deg, #10b981, #059669); border-radius: 12px; width: 48px; height: 48px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 24px;">🛡️</span>
                          </div>
                          <h5 class="mobile-font-small" style="color: #1e293b; margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">24/7 Protection</h5>
                          <p class="mobile-font-small" style="color: #64748b; margin: 0; font-size: 14px;">Round-the-clock security monitoring</p>
                        </div>
                      </td>
                      <td class="mobile-trust-card mobile-full-width" style="text-align: center; padding: 20px; vertical-align: top;">
                        <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); margin-bottom: 16px;">
                          <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); border-radius: 12px; width: 48px; height: 48px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 24px;">⚡</span>
                          </div>
                          <h5 class="mobile-font-small" style="color: #1e293b; margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">Rapid Response</h5>
                          <p class="mobile-font-small" style="color: #64748b; margin: 0; font-size: 14px;">30-second emergency response time</p>
                        </div>
                      </td>
                      <td class="mobile-trust-card mobile-full-width" style="text-align: center; padding: 20px; vertical-align: top;">
                        <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); margin-bottom: 16px;">
                          <div style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); border-radius: 12px; width: 48px; height: 48px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 24px;">🌍</span>
                          </div>
                          <h5 class="mobile-font-small" style="color: #1e293b; margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">Global Reach</h5>
                          <p class="mobile-font-small" style="color: #64748b; margin: 0; font-size: 14px;">180+ clients worldwide</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td class="mobile-padding" style="background: #1e293b; padding: 40px; text-align: center; border-radius: 0 0 20px 20px;">
                  <div style="margin-bottom: 24px;">
                    <h3 class="mobile-font-medium" style="color: #ffffff; margin: 0 0 8px 0; font-size: 24px; font-weight: 700;">YUBIX Security</h3>
                    <p class="mobile-font-small" style="color: #94a3b8; margin: 0; font-size: 16px;">Your Trusted Security Partner</p>
                  </div>
                  
                  <div class="mobile-padding-small" style="background: rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 24px; margin: 24px 0;">
                    <!-- Mobile-friendly contact info -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr class="mobile-full-width">
                        <td class="mobile-full-width mobile-text-center" style="padding: 4px 8px; color: #e2e8f0; font-size: 14px; font-weight: 500;">
                          📧 info@yubix.com
                        </td>
                      </tr>
                      <tr class="mobile-full-width">
                        <td class="mobile-full-width mobile-text-center" style="padding: 4px 8px; color: #e2e8f0; font-size: 14px; font-weight: 500;">
                          📞 +1 (555) 123-4567
                        </td>
                      </tr>
                      <tr class="mobile-full-width">
                        <td class="mobile-full-width mobile-text-center" style="padding: 4px 8px; color: #e2e8f0; font-size: 14px; font-weight: 500;">
                          🚨 Emergency: +1 (555) 911-HELP
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Desktop horizontal layout -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" class="mobile-hide" style="margin: 0 auto;">
                      <tr>
                        <td style="padding: 8px 16px; color: #e2e8f0; font-size: 14px; font-weight: 500;">
                          📧 info@yubix.com
                        </td>
                        <td style="padding: 8px 16px; color: #64748b;">|</td>
                        <td style="padding: 8px 16px; color: #e2e8f0; font-size: 14px; font-weight: 500;">
                          📞 +1 (555) 123-4567
                        </td>
                        <td style="padding: 8px 16px; color: #64748b;">|</td>
                        <td style="padding: 8px 16px; color: #e2e8f0; font-size: 14px; font-weight: 500;">
                          🚨 Emergency: +1 (555) 911-HELP
                        </td>
                      </tr>
                    </table>
                  </div>
                  
                  <p class="mobile-font-small" style="color: #64748b; margin: 24px 0 0 0; font-size: 12px; line-height: 1.5;">
                    This email was sent from an automated system. Please do not reply directly to this email.<br>
                    If you have any questions, please contact us using the information above.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `
}

export async function sendConfirmationEmail(formData: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('🚀 Starting email send process for:', formData.email)
    const transporter = await createEmailTransporter()

    const confirmationMailOptions = {
      from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM}>`,
      to: formData.email,
      subject: process.env.CONFIRMATION_EMAIL_SUBJECT,
      text: `Hello ${formData.name}, thank you for contacting YUBIX Security. We have received your message and our team will get back to you within 24 hours.`,
      html: generateConfirmationEmailHTML(formData),
    }

    const adminMailOptions = {
      from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🚨 New Contact Form Submission: ${formData.subject}`,
      text: `New contact form submission from ${formData.name} (${formData.email})`,
      html: generateAdminNotificationHTML(formData),
    }

    console.log('📧 Sending confirmation email to:', formData.email)
    const confirmationResult = await transporter.sendMail(confirmationMailOptions)
    console.log('✅ Confirmation email sent:', confirmationResult.messageId)

    console.log('📧 Sending admin notification to:', process.env.ADMIN_EMAIL)
    const adminResult = await transporter.sendMail(adminMailOptions)
    console.log('✅ Admin email sent:', adminResult.messageId)

    return { success: true }
  } catch (error) {
    console.error('❌ Email sending error:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }
  }
}