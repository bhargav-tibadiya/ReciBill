import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { routes } from './Config/routes'
import Wrapper from './Layout/Wrapper/Wrapper'
import Home from './Pages/Home/Home'
import Application from './Pages/Application/Application'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import NotFound from './Pages/NotFound/NotFound'

const App = () => {

  return (
    <div className='app_container'>
      <Routes>
        <Route element={<Wrapper />} >
          <Route path={routes.default} element={<Home />} />
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.app} element={<Application />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
