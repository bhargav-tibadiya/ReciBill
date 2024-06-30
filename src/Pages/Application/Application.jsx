import { useState } from 'react';
import { GoToIcon } from '../../Assests/SVG/GlobalSVG';
import styles from './Application.module.scss';


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
    name: 'Varient 2',
    path: 'images/varient1.png',
    tag1: 'Dynamic',
    tag2: 'Cool',
    tag3: 'Light',
    tag4: 'Free',
  },
]

const Application = () => {

  const [selectedDesignID, setSelectedDesignID] = useState();

  console.log('selectedDesignID', selectedDesignID)

  return (
    <div className={styles.application_container}>
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

    </div>
  )
}

export default Application