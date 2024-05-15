export function getInitials(name: string): string {
  const words = name.split(' ')

  if (words.length <= 2) {
    return words.map((word) => word.charAt(0).toUpperCase()).join('')
  }
  const initials = words.slice(0, 2).map((word) => word.charAt(0).toUpperCase())

  return initials.join('')
}
