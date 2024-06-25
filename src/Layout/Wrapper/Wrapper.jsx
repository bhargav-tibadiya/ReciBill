import { Outlet } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"

const Wrapper = () => {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  )
}

export default Wrapper