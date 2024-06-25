import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { routes } from './Config/routes'
import Test from './Pages/Test/Test'
import Wrapper from './Layout/Wrapper/Wrapper'
import Home from './Pages/Home/Home'
import Application from './Pages/Application/Application'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'

const App = () => {

  return (
    <div className='app_container'>
      <Wrapper>
        <Routes>
          <Route path={routes.test} element={<Test />} />
          <Route path={routes.default} element={<Home />} />
          <Route path={routes.app} element={<Application />} />
          <Route path={routes.default} element={<About />} />
          <Route path={routes.default} element={<Contact />} />
        </Routes>
      </Wrapper >
    </div>
  )
}

export default App
