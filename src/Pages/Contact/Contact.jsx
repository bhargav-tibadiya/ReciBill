import { CallIcon, Collab, GlobeIcon, GoToIcon, Group1, MessageIcon, Suggest } from '../../Assests/SVG/GlobalSVG'
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
                Mail us your thoughts
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

          <div className={styles.number}>
            <div className={styles.labelF}>
              Contact Number
            </div>
            <div className={styles.inputF}>
              <input type="number" placeholder='+91 9876543210' />
            </div>
          </div>
          <div className={styles.message}>
            <div className={styles.labelF}>
              Type your Message
            </div>
            <div className={styles.inputF}>
              <input type="text" placeholder='Start Writing' />
            </div>
          </div>

          <div className={styles.submit_button}>
            <button type='submit' onClick={() => { }}>
              Send Message
            </button>
          </div>

        </div>
      </div>

      <div className={styles.suggest}>
        <div className={styles.suggest_left}>

          <div className={styles.suggest_head}>
            Suggest us a feature
          </div>
          <div className={styles.suggest_desc}>
            <span>We greatly value your input and are excited to hear your suggestions.</span>
            <br />
            <span>Your expertise and creativity are crucial to our success, and we are confident that together we can achieve remarkable results.</span>
          </div>
          <div className={styles.suggest_button} onClick={() => window.open('https://www.linkedin.com/in/bhargav-tibadiya/', '_blank')}>
            <span className={styles.contact_text}>Contact Us</span>
            <span className={styles.contact_text_icon}><GoToIcon /></span>
          </div>
        </div>

        <div className={styles.suggest_right}>
          <Suggest />
        </div>

      </div>

      <div className={styles.collab}>
        <div className={styles.collab_left}>

          <div className={styles.collab_head}>
            Collab with us
          </div>
          <div className={styles.collab_desc}>
            <span>We are enthusiastic about the possibility of working with you and are confident that our collaboration can lead to significant achievements.</span>
            <br />
            <span>Thank you for considering this opportunity, and we look forward to your positive response.</span>
          </div>
          <div className={styles.collab_button} onClick={() => window.open('https://www.linkedin.com/in/bhargav-tibadiya/', '_blank')}>
            <span className={styles.collab_text}>Collab With us</span>
            <span className={styles.collab_text_icon}><GoToIcon /></span>
          </div>
        </div>

        <div className={styles.collab_right}>
          <Collab />
        </div>

      </div>

    </div>
  )
}

export default Contact