import '../styles/components/socialNetWorks.sass'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const socialNetWorks =[
  {name:"linkedin", icon:<FaLinkedinIn/>},
  {name:"github", icon:<FaGithub/>},
]

function SocialNetWorks () {
  return(
    <section id="social-networks">
      {socialNetWorks.map((network)=>(
        <a href="#" className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetWorks