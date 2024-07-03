import { useState } from 'react'
import styles from './Test.module.scss'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Warning } from '../../Assests/SVG/GlobalSVG'

const validationSchema = yup.object().shape({
  main_title: yup.string().required('Please Enter the Title'),
  bill_id: yup.string().max(10, "Maximum Length is only 10").required("Please Enter ID"),
  day: yup.number("Only Numbers Allowed").min(1, "Enter Valid Date").max(31, "Enter Valid Date").required("Enter Date"),
  month: yup.number("Only Numbers Allowed").min(1, "Enter Valid month").max(12, "Enter Valid month").required("Enter month"),
  year: yup.number("Only Numbers Allowed").min(2000, "Enter Valid Year").max(2030, "Enter Valid Year").required("Enter Year"),
  from: yup.string().required('Please Enter the Sender Name'),
  to: yup.string().required('Please Enter the Reciever Name'),
  name: yup.string().required('Please Enter Name'),
  cost: yup.number().required('Please Enter Cost'),
  quantity: yup.number().required('Please Enter Quantity'),
  amount: yup.number().required('Please Enter Amount'),
  discount: yup.number().required('Please Enter Discount'),
})

const initialValues = {
  main_title: "",
  bill_id: "",
  day: "",
  month: "",
  year: "",
  from: "",
  to: "",
  type: "",
  entries: 1,
  items: [],
  name: '',
  cost: 0,
  quantity: 0,
  amount: 0,
  subtotal: 0,
  discount: 0,
  total: 0
}

const Test = () => {

  const [totalEntry, setTotalEntry] = useState(1)
  const [items, setItems] = useState([])

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
  })

  const { values, handleChange, handleBlur, setFieldValue, touched, errors } = formik;

  const handleItemDataChange = (id, field, value) => {
    const macthingItem = items.length.find((item) => {
      return item.id === id;
    })
    if (macthingItem) {
      macthingItem[field] = value
      setItems((items.filter((item) => item.id !== id)).push(macthingItem))
    }
  }

  // console.log('formik', formik)


  return (

    <div className={styles.info_form_container}>

      <div className={styles.info_form}>

        <div className={styles.heading}>
          Lets start by collecting neccesary Info
        </div>

        <div className={styles.main_title}>
          <div className={styles.label}>
            Main Title
            {(touched.main_title && errors.main_title) ? <div className={styles.errors}><span><Warning /></span>{errors.main_title}</div> : ''}
          </div>
          <div className={styles.input}>
            <input
              type="text"
              placeholder='Ex. Invoice'
              name='main_title'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.main_title}
            />
          </div>
        </div>

        <div className={styles.order_id}>
          <div className={styles.label}>
            Order ID
            {(touched.bill_id && errors.bill_id) ? <div className={styles.errors}><span><Warning /></span>{errors.bill_id}</div> : ''}
          </div>
          <div className={styles.input}>
            <input
              type="text"
              placeholder='PI0001'
              name='bill_id'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.bill_id}
            />
          </div>
        </div>

        <div className={styles.date_select}>

          <div className={styles.date}>
            <div className={styles.label}>
              Date
              {(touched.day && errors.day) ? <div className={styles.errors}><span><Warning /></span>{errors.day}</div> : ''}
            </div>
            <div className={styles.input}>
              <input
                type="number"
                placeholder='26'
                name='day'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.day}
              />
            </div>
          </div>

          <div className={styles.month}>
            <div className={styles.label}>
              Month
              {(touched.month && errors.month) ? <div className={styles.errors}><span><Warning /></span>{errors.month}</div> : ''}
            </div>
            <div className={styles.input}>
              <input
                type="number"
                placeholder='11'
                name='month'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.month}
              />
            </div>
          </div>

          <div className={styles.year}>
            <div className={styles.label}>
              Year
              {(touched.year && errors.year) ? <div className={styles.errors}><span><Warning /></span>{errors.year}</div> : ''}
            </div>
            <div className={styles.input}>
              <input
                type="text"
                placeholder='2003'
                name='year'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.year}
              />
            </div>
          </div>

        </div>

        <div className={styles.from_to}>

          <div className={styles.from}>
            <div className={styles.label}>
              From
              {(touched.from && errors.from) ? <div className={styles.errors}><span><Warning /></span>{errors.from}</div> : ''}
            </div>
            <div className={styles.input}>
              <input
                type="text"
                placeholder='Bhargav'
                name='from'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.from}
              />
            </div>
          </div>

          <div className={styles.to}>
            <div className={styles.label}>
              To
              {(touched.to && errors.to) ? <div className={styles.errors}><span><Warning /></span>{errors.to}</div> : ''}
            </div>
            <div className={styles.input}>
              <input
                type="text"
                placeholder='Shubham'
                name='to'
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.to}
              />
            </div>
          </div>

        </div>

        <div className={styles.no_of_entries}>
          <div className={styles.label}>
            How Many Items are there ?
          </div>
          <div className={styles.input}>
            <input
              type="number"
              placeholder='1'
              name='entries'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.entries}
            />
          </div>
        </div>

        {(() => {
          const elements = []
          for (let j = 0; j < (values.entries); j++) {
            elements.push(
              <div key={j} className={styles.entry_container}>
                <div className={styles.item_title}>
                  <div className={styles.label}>
                    Item Name
                  </div>
                  <div className={styles.input}>
                    <input
                      type="text"
                      placeholder='Logo Designing'
                      name='name'
                      onBlur={handleBlur}
                      value={items[j]?.name}
                    />
                  </div>
                </div>

                <div className={styles.item_info}>

                  <div className={styles.cost}>
                    <div className={styles.label}>
                      Cost
                    </div>
                    <div className={styles.input}>
                      <input
                        type="number"
                        placeholder='26'
                        name='cost'
                        onBlur={handleBlur}
                        value={items[j]?.cost}
                      />
                    </div>
                  </div>

                  <div className={styles.quantity}>
                    <div className={styles.label}>
                      Quantity
                    </div>
                    <div className={styles.input}>
                      <input
                        type="number"
                        placeholder='11'
                        name='quntity'
                        onBlur={handleBlur}
                        value={items[j]?.quantity}
                      />
                    </div>
                  </div>

                  <div className={styles.amount}>
                    <div className={styles.label}>
                      Amount
                    </div>
                    <div className={styles.total}>
                      {(parseFloat(items[j]?.quantity) * parseFloat(items[j]?.cost)) ?? 0}
                    </div>
                  </div>
                </div>
              </div>
            )

          }
          return elements
        })()}



        <div className={styles.submit_button}>
          <button type='submit' onClick={() => { }}>
            Submit
          </button>
        </div>

      </div>
    </div>
  )
}

export default Test