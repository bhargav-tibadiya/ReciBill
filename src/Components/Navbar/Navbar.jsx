import { useState } from 'react'
import styles from './Navbar.module.scss'

const menuMap = [
  {
    key: 0,
    value: "Home"
  },
  {
    key: 1,
    value: "App"
  },
  {
    key: 2,
    value: "About"
  },
  {
    key: 3,
    value: "Contact"
  },
]

const Navbar = () => {

  const [selectedMenuId, setSelectedMenuId] = useState(0)

  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_box}>
        {
          menuMap.map((menu, index) => {
            return (
              <div
                key={index}
                className={`${styles.menuItems} ${selectedMenuId === index ? styles._active_ : ''}`}
                onClick={() => { setSelectedMenuId(menu.key) }}
              >
                {menu.value}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Navbar