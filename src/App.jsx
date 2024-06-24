import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { routes } from './Config/routes'
import Test from './Pages/Test/Test'

function App() {

  return (
    <div className='app_container'>
      <Routes>
        <Route path={routes.default} element={<Test/>} />
        <Route path={routes.test} element={<Test/>} />
      </Routes>
    </div>
  )
}

export default App
