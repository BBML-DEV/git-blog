import { format } from 'date-fns'

export function formatted(date: any, typeFormat: string) {
  const formattedDate = format(date, typeFormat)
  return formattedDate
}
