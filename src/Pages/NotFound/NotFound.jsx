import { NotFoundIllustartion } from '../../Assests/SVG/GlobalSVG';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.not_found_container}>
      <div className={styles.illlustration}>
        <NotFoundIllustartion/>
      </div>
      <div className={styles.text}>
        There is no such page
      </div>
    </div>
  )
}

export default NotFound