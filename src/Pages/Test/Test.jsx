import styles from './Test.module.scss'

const Test = () => {
  return (
    <div className={styles.info_form_container}>

      <div className={styles.info_form}>

        <div className={styles.heading}>
          Lets start by collecting neccesary Info
        </div>

        <div className={styles.main_title}>
          <div className={styles.label}>
            Main Title
          </div>
          <div className={styles.input}>
            <input type="text" placeholder='Ex. Invoice' />
          </div>
        </div>

        <div className={styles.order_id}>
          <div className={styles.label}>
            Order ID
          </div>
          <div className={styles.input}>
            <input type="text" placeholder='PI0001' />
          </div>
        </div>

        <div className={styles.date_select}>

          <div className={styles.date}>
            <div className={styles.label}>
              Date
            </div>
            <div className={styles.input}>
              <input type="number" placeholder='26' />
            </div>
          </div>

          <div className={styles.month}>
            <div className={styles.label}>
              Month
            </div>
            <div className={styles.input}>
              <input type="number" placeholder='11' />
            </div>
          </div>

          <div className={styles.year}>
            <div className={styles.label}>
              Year
            </div>
            <div className={styles.input}>
              <input type="text" placeholder='2003' />
            </div>
          </div>

        </div>

        <div className={styles.from_to}>

          <div className={styles.from}>
            <div className={styles.label}>
              From
            </div>
            <div className={styles.input}>
              <input type="text" placeholder='Bhargav' />
            </div>
          </div>

          <div className={styles.to}>
            <div className={styles.label}>
              To
            </div>
            <div className={styles.input}>
              <input type="text" placeholder='Shubham' />
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Test