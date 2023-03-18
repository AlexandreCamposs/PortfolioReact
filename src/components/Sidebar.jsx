import Avatar from '../img/Ale.jpg';
import '../styles/components/sidebar.sass';
import SocialNetWorks from './SocialNetWorks';
import InformationContainer from './InformationContainer';

function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Alexandre Campos" />
      <p className="title">Densevolvedor</p>
      <SocialNetWorks/>
      <InformationContainer/>
      <a href="" className="btn">
        download currículo
      </a>
    </aside>
  );
}

export default Sidebar;
