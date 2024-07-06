import { generatePDF } from './test'
import styles from './Test.module.scss'

// const data = {
//   "main_title": "Qoutation",
//   "bill_id": "#Q0003",
//   "day": 6,
//   "month": 7,
//   "year": "2024",
//   "from": "Bhargav",
//   "to": "Shubham",
//   "type": "",
//   "entries": 2,
//   "items": [
//     {
//       "name": "Logo",
//       "cost": 499,
//       "quantity": 1
//     },
//     {
//       "name": "Posts",
//       "cost": 125,
//       "quantity": 45
//     }
//   ],
//   "discount": 0
// }

const Test = () => {
  return (
    <div className={styles.test_container}>
      <button onClick={() => generatePDF()}>
        Download PDF
      </button>
    </div>
  )
}

export default Test