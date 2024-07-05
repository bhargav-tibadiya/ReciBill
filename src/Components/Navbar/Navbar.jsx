import { useEffect, useState } from 'react'
import styles from './Navbar.module.scss'
import { useNavigate } from 'react-router-dom'

const menuMap = [
  {
    key: 0,
    lable: "Home",
    value: "home"
  },
  {
    key: 1,
    lable: "App",
    value: "app"
  },
  {
    key: 2,
    lable: "About",
    value: "about"
  },
  {
    key: 3,
    lable: "Contact",
    value: "contact"
  },
]
const pathValueMap = {
  '/': 0,
  '/home': 0,
  '/app': 1,
  '/about': 2,
  '/contact': 3,
}

const Navbar = () => {

  const [selectedMenuId, setSelectedMenuId] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const currentPath = location.pathname;
    setSelectedMenuId(pathValueMap[currentPath])
  }, [])

  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_box}>
        {
          menuMap.map((menu, index) => {
            return (
              <div
                key={index}
                className={`${styles.menuItems} ${selectedMenuId === index ? styles._active_ : ''}`}
                onClick={() => { setSelectedMenuId(menu.key), navigate(`/${menu.value}`) }}
              >
                {menu.lable}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Navbar