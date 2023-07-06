import { useContext } from 'react'
import { BlogContext } from '../context'

export function useBlog() {
  const context = useContext(BlogContext)
  return context
}
