'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return { status: 'error', message: 'Lütfen ad, e-posta ve mesaj alanlarını doldurun.' }
  }

  if (!isValidEmail(email)) {
    return { status: 'error', message: 'Lütfen geçerli bir e-posta adresi girin.' }
  }

  // In production, forward this to email/CRM. For now we log server-side.
  console.log('[v0] New contact submission:', { name, email, phone, message })

  return {
    status: 'success',
    message: 'Mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz.',
  }
}
