

export const decrypt = (text: string): string => {
  return text.split('').reverse().join('')
}