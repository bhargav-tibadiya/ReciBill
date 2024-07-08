import { useEffect, useState } from 'react';
import { GoToIcon } from '../../Assests/SVG/GlobalSVG';
import { Warning } from '../../Assests/SVG/GlobalSVG'
import { useFormik } from 'formik'
import styles from './Application.module.scss';
import * as yup from 'yup'
import { generatePDFS1 } from '../../Utils/Generation/style1';


const template = [
  {
    id: 0,
    name: 'Varient 1',
    path: 'images/varient1.png',
    tag1: 'Minimal',
    tag2: 'B&W',
    tag3: 'Elegant',
    tag4: 'Free',
  },
  {
    id: 1,
    name: 'Varient 2',
    path: 'images/varient1.png',
    tag1: 'Dynamic',
    tag2: 'Cool',
    tag3: 'Light',
    tag4: 'Free',
  },
  {
    id: 2,
    name: 'Varient 3',
    path: 'images/varient1.png',
    tag1: 'Dynamic',
    tag2: 'Cool',
    tag3: 'Light',
    tag4: 'Free',
  },
]

const validationSchema = yup.object().shape({
  main_title: yup.string().required('Please Enter the Title'),
  bill_id: yup.string().max(10, "Maximum Length is only 10").required("Please Enter ID"),
  day: yup.number().min(1, "Enter Valid Date").max(31, "Enter Valid Date").required("Enter Date"),
  month: yup.number().min(1, "Enter Valid month").max(12, "Enter Valid month").required("Enter month"),
  year: yup.number().min(2000, "Enter Valid Year").max(2030, "Enter Valid Year").required("Enter Year"),
  entries: yup.number().min(1, "Enter Valid Year").max(8, "Max 8 Entries Allowed").required("Enter no of Items"),
  from: yup.string().required('Please Enter the Sender Name'),
  to: yup.string().required('Please Enter the Receiver Name'),
  items: yup.array().of(
    yup.object().shape({
      name: yup.string().required('Please Enter Name'),
      cost: yup.number().required('Please Enter Cost'),
      quantity: yup.number().required('Please Enter Quantity'),
    })
  ),
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
  items: [{ name: '', cost: 0, quantity: 0 }],
  discount: 0,
}


const Application = () => {

  const [selectedDesignID, setSelectedDesignID] = useState();
  const [isInfoFormActice, setIsInfoFormActice] = useState(false);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('values', values);
      generatePDFS1(values);
    }
  })


  const handleItemDataChange = (e) => {
    const newEntries = parseInt(e.target.value, 10);
    setFieldValue('entries', newEntries);

    // Adjust items array length
    const newItems = [...values.items];
    while (newItems.length < newEntries) {
      newItems.push({ name: '', cost: 0, quantity: 0 });
    }
    while (newItems.length > newEntries) {
      newItems.pop();
    }
    setFieldValue('items', newItems);
  };

  const { values, handleChange, handleSubmit, setFieldValue, handleBlur, touched, errors } = formik;

  useEffect(() => {
    setIsInfoFormActice(false);
    if (selectedDesignID !== undefined) {
      setIsInfoFormActice(true);
    } else {
      setIsInfoFormActice(false);
    }
  }, [selectedDesignID])


  return (
    <div className={`${styles.application_container} ${isInfoFormActice ? styles.active : ''}`}>

      {/* App Page */}
      <div className={styles.intro_heading}>
        <h2>
          Select The Template of your choice
        </h2>
      </div>

      <div className={styles.design_container}>
        {
          template.map((designItem) => {
            return (
              <div key={designItem.id} className={styles.design}>
                <div className={styles.design_frame}>
                  <div className={styles.design_pic}>
                    <img src={designItem.path} alt="" />
                  </div>
                  <div className={styles.design_name}>
                    {designItem.name}
                  </div>
                  <div className={styles.design_tags}>
                    <span>{designItem.tag1}</span>
                    <span>{designItem.tag2}</span>
                    <span>{designItem.tag3}</span>
                    <span>{designItem.tag4}</span>
                  </div>
                  <div className={`${styles.design_select} ${selectedDesignID === designItem.id ? styles.selected_design : ''}`} onClick={() => setSelectedDesignID(designItem.id)}>
                    <span className={styles.select_text}>{selectedDesignID === designItem.id ? 'Selected' : 'Select'}</span>
                    <span className={styles.select_text_icon}><GoToIcon /></span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      {/* Information form */}

      <div className={`${styles.info_form_container} ${isInfoFormActice ? styles.active : ''}`}>
        <form onSubmit={handleSubmit}>

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
                {(touched.entries && errors.entries) && <div className={styles.errors}><span><Warning /></span>{errors.entries}</div>}
              </div>
              <div className={styles.input}>
                <input
                  type="number"
                  placeholder='1'
                  name='entries'
                  onChange={handleItemDataChange}
                  onBlur={handleBlur}
                  value={values.entries}
                />
              </div>
            </div>

            {values.items.map((item, index) => (
              <div key={index} className={styles.entry_container}>
                <div className={styles.item_title}>
                  <div className={styles.label}>
                    Item Name
                    {touched.items?.[index]?.name && errors.items?.[index]?.name && (
                      <div className={styles.errors}><span><Warning /></span>{errors.items[index].name}</div>
                    )}
                  </div>
                  <div className={styles.input}>
                    <input
                      type="text"
                      placeholder='Logo Designing'
                      name={`items[${index}].name`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={item.name}
                    />
                  </div>
                </div>

                <div className={styles.item_info}>
                  <div className={styles.cost}>
                    <div className={styles.label}>
                      Cost
                      {touched.items?.[index]?.cost && errors.items?.[index]?.cost && (
                        <div className={styles.errors}><span><Warning /></span>{errors.items[index].cost}</div>
                      )}
                    </div>
                    <div className={styles.input}>
                      <input
                        type="number"
                        placeholder='26'
                        name={`items[${index}].cost`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={item.cost}
                      />
                    </div>
                  </div>

                  <div className={styles.quantity}>
                    <div className={styles.label}>
                      Quantity
                      {touched.items?.[index]?.quantity && errors.items?.[index]?.quantity && (
                        <div className={styles.errors}><span><Warning /></span>{errors.items[index].quantity}</div>
                      )}
                    </div>
                    <div className={styles.input}>
                      <input
                        type="number"
                        placeholder='11'
                        name={`items[${index}].quantity`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={item.quantity}
                      />
                    </div>
                  </div>

                  <div className={styles.amount}>
                    <div className={styles.label}>
                      Amount
                    </div>
                    <div className={styles.total}>
                      {(parseFloat(item.quantity || 0) * parseFloat(item.cost || 0)).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className={styles.discount}>
              <div className={styles.label}>
                Discount
                {(touched.discount && errors.discount) && <div className={styles.errors}><span><Warning /></span>{errors.discount}</div>}
              </div>
              <div className={styles.input}>
                <input
                  type="number"
                  placeholder='1'
                  name='discount'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.discount}
                />
              </div>
            </div>

            <div className={styles.submit_button}>
              <button type='submit'>
                Submit
              </button>
            </div>

          </div>
        </form>
      </div>

    </div>
  )
}

export default Application