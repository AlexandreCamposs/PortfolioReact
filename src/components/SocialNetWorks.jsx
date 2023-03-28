import '../styles/components/socialNetWorks.sass'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const socialNetWorks =[
  {name:"linkedin", icon:<FaLinkedinIn/>, URL:"https://www.linkedin.com/in/alexandre-moura-de-campos-496627114/"},
  {name:"github", icon:<FaGithub/>, URL:"https://github.com/AlexandreCamposs"},
]

function SocialNetWorks () {
  return(
    <section id="social-networks">
      {socialNetWorks.map((network)=>(
        <a href={network.URL} className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetWorks