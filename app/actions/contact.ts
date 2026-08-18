'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * submitContact server action
 *
 * Supports two integration methods:
 * 1) Formspree: set FORMSPREE_FORM_ID in environment (recommended)
 *    - Create a form at https://formspree.io and get the form ID (e.g. xfylabqj)
 *    - Formspree will forward submissions to the email address configured in your Formspree dashboard
 *
 * If FORMSPREE_FORM_ID is not set the action will log the submission and return success (no email sent).
 */
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

  // Prefer Formspree integration when FORMSPREE_FORM_ID is provided
  const formspreeId = process.env.FORMSPREE_FORM_ID
  if (formspreeId) {
    try {
      const endpoint = `https://formspree.io/f/${formspreeId}`
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      })

      if (!res.ok) {
        const text = await res.text()
        console.error('[contact] Formspree error', res.status, text)
        return { status: 'error', message: 'Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin.' }
      }

      return {
        status: 'success',
        message: 'Mesajınız gönderildi. En kısa sürede sizinle iletişime geçeceğiz.',
      }
    } catch (err) {
      console.error('[contact] Formspree request failed', err)
      return { status: 'error', message: 'Mesaj gönderilirken hata oluştu. Lütfen daha sonra tekrar deneyin.' }
    }
  }

  // Fallback: no external integration configured — log the submission so it's available server-side
  console.log('[contact] New contact submission (no integration configured):', {
    name,
    email,
    phone,
    message,
  })

  return {
    status: 'success',
    message: 'Mesajınız alındı. (Not: Henüz e-posta entegrasyonu yapılandırılmadı.)',
  }
}
