import { useContext } from 'react'
import { BlogContext } from '../Context'

export function useBlog() {
  const context = useContext(BlogContext)
  return context
}
