import { Avatar1, Avatar2, Avatar3, Neuvillete, Wanderer, Zhongli } from '../../Assests/SVG/GlobalSVG'
import styles from './About.module.scss'

const members = [
  {
    id: 0,
    avatar: <Avatar1 />,
    name: "Bhargav Tibadiya",
    responcibility: "Handling new feature development and backed part"
  },
  {
    id: 1,
    avatar: <Avatar2 />,
    name: "Shubham Radadiya",
    responcibility: "Handling designing, user experience and frontend part"
  },
  {
    id: 2,
    avatar: <Avatar3 />,
    name: "You can be here",
    responcibility: "Why don't you join us and Contribute in building something Great ?"
  },
]

const testimonials = [
  {
    id: 0,
    pfp: <Neuvillete />,
    name: "Meet Khunt",
    position: "Sales Manager at Yogi Impex",
    description: "I've been using the app since 2 days and I'm loving it. Excited to see what kind of feature they develop over the time. I love the custom design feature of that it helped me to develop my custom design for my company",
  },
  {
    id: 1,
    pfp: <Wanderer />,
    name: "Vikram Malhotra",
    position: "Marketing Specialist at TechInnovate India",
    description: "I'm impressed with the app's user-friendly interface. It's been a game-changer for our team's productivity. The collaboration features are top-notch, and I'm eagerly waiting to see what new updates they roll out in the future."
  },
  {
    id: 2,
    pfp: <Zhongli />,
    name: "Rajesh Patel",
    position: "Founder of GreenGrow Organic Farms",
    description: "As an entrepreneur, this app has been a blessing. The financial tracking tools have simplified our accounting process. I particularly appreciate the customer support,and yep they're always quick to respond."
  }
]

const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.intro_heading}>
        <h2>
          We are group of <span> Developers </span>
        </h2>
        <h3>
          We are group of Computer Science Undergrads. Trying to build something that helps peoples/ business and saves their time
        </h3>
      </div>
      <div className={styles.team}>
        {
          members.map((member) => {
            return (
              <div key={member.id} className={styles.member}>
                <div className={styles.member_avatar}>
                  {member.avatar}
                </div>
                <div className={styles.member_name}>
                  {member.name}
                </div>
                <div className={styles.member_desc}>
                  {member.responcibility}
                </div>
              </div>
            )
          })
        }

      </div>
      <div className={styles.user_testimonial}>
        <div className={styles.testimonial_heading}>What our User says about Us</div>
        <div className={styles.testimonials}>
          {
            testimonials.map((testimonial) => {
              return (
                <div key={testimonial.id} className={styles.testimonial}>
                  <div className={styles.content}>
                    {testimonial.description}
                  </div>
                  <div className={styles.pfp}>
                    {testimonial.pfp}
                  </div>
                  <div className={styles.user_name}>
                    {testimonial.name}
                    <div className={styles.user_position}>
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default About