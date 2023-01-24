import './Contact.css';

function Contact() {
    return (
      <div className="contact-container">
        <a href="mailto: thomas.connole.business@gmail.com" className='contact-info-container'>
            <h4>thomas.connole.business@gmail.com</h4>
        </a>
        <a href="https://www.linkedin.com/in/thomas-connole-baa593161/" className='contact-info-container'>
            <h4>LinkedIn</h4>
        </a>
        <a href="https://github.com/tconnole" className='contact-info-container'>
            <h4>Github</h4>
        </a>
      </div>
    );
  }
  
  export default Contact;