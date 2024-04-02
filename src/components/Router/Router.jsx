import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Post, Login, Register, NotFound } from '../../pages'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/index' element={<Home />}></Route>
        <Route path='/post' element={<Post />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router