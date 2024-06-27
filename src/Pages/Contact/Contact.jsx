import { CallIcon, GlobeIcon, Group1, MessageIcon } from '../../Assests/SVG/GlobalSVG'
import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.contact_container}>
      <div className={styles.intro_heading}>
        <h2>
          Wanna Talk to us ??
        </h2>
      </div>

      <div className={styles.contact_heading}>
        <div className={styles.illustration}>
          <Group1 />
        </div>
        <div className={styles.header}>
          <h2>
            Got a Idea?
          </h2>
          <h2>
            We've got the skills. Let's team up
          </h2>
          <h3>
            Tell us more about yourself and what you've got in mind.
          </h3>
        </div>
      </div>

      <div className={styles.contact_form}>
        <div className={styles.contact_info}>

          <div className={styles.info_card}>
            <div className={styles.left}>
              <MessageIcon />
            </div>
            <div className={styles.right}>
              <h3>Wanna chat with us ?</h3>
              <div className={styles.desx1}>
                Lets talk about something Amazing
              </div>
              <div className={styles.desx2}>
                <a href="https://www.linkedin.com/in/bhargav-tibadiya/"><span>@</span> Bhargav</a>
                <a href="https://www.linkedin.com/in/shubham-radadiya/"><span>@</span> Shubham</a>
              </div>
            </div>
          </div>

          <div className={styles.info_card}>
            <div className={styles.left}>
              <GlobeIcon />
            </div>
            <div className={styles.right}>
              <h3>Mail us</h3>
              <div className={styles.desx1}>
                Mail us you thoughts
              </div>
              <div className={styles.desx2}>
                <a href="mailto:bhargavptibadiya.tbp@gmail.com?subject=ReciBill?body=Hey I have some some suggestion for">bhargavptibadiya<span>.</span>tbp<span>@</span>gmail<span>.</span>com</a>

              </div>
            </div>
          </div>

          <div className={styles.info_card}>
            <div className={styles.left}>
              <CallIcon />
            </div>
            <div className={styles.right}>
              <h3>Call Us</h3>
              <div className={styles.desx1}>
                Most probably I wont pick up, try Mail
              </div>
              <div className={styles.desx2}>
                <a href=""><span>+91</span> 9876543210</a>
              </div>
            </div>
          </div>

        </div>
        <div className={styles.form}>

          <div className={styles.name}>
            <div className={styles.first_name}>
              <div className={styles.labelF}>
                First Name
              </div>
              <div className={styles.inputF}>
                <input type="text" placeholder='Your First Name' />
              </div>
            </div>

            <div className={styles.last_name}>
              <div className={styles.labelF}>
                Last Name
              </div>
              <div className={styles.inputF}>
                <input type="text" placeholder='Your Last Name' />
              </div>
            </div>
          </div>

          <div className={styles.email}>
            <div className={styles.labelF}>
              Email
            </div>
            <div className={styles.inputF}>
              <input type="text" placeholder='Enter Your Email Address' />
            </div>
          </div>

          <div className={styles.number}></div>
          <div className={styles.message}></div>

        </div>
      </div>
    </div>
  )
}

export default Contact