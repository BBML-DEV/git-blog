import { Routes, Route } from 'react-router-dom'
import { Blog } from '../../pages/Blog'
import { Post } from '../../pages/Post'
import { DefaultLayout } from '../../layout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:number" element={<Post />} />
      </Route>
    </Routes>
  )
}
