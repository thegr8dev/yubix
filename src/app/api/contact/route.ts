import { NextRequest, NextResponse } from 'next/server'
import { validateFormData, sendConfirmationEmail, type ContactFormData } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json()
    
    const validation = validateFormData(formData)
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      )
    }

    const emailResult = await sendConfirmationEmail(formData)
    
    if (!emailResult.success) {
      return NextResponse.json(
        { success: false, error: 'Failed to send confirmation email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message. A confirmation email has been sent to your email address.' 
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}