import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';
import '../styles/components/informationContainer.sass';

function InformationContainer() {
  return (
    <section id="information">
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>Email</h3>
          <p>ale.wl@hotmail.com</p>
        </div>
      </div>
    </section>
  );
}

export default InformationContainer;
