export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const isTenDigits = cleaned.length === 10

  if (cleaned.length < 10 || cleaned.length > 11) {
    return `Erro: o telefone deve conter 10 ou 11 digitos, contém ${cleaned.length}.`
  }

  if (isTenDigits) {
    return cleaned.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3')
  } else {
    return cleaned.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')
  }
}
