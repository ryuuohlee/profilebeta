import React, { useState } from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import './Contact.css';

Modal.setAppElement('#root');

const Contact = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const size = 29;
  //let event;

  function openModal(){
    setIsOpen(true);
    console.log(modalIsOpen);
  }

  function closeModal(event) {
    event.stopPropagation();
    setIsOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(name);
    let templateParams = {
      from_name: name,
      to_name: "Jeff",
      subject: subject,
      message_html: message
    }

    emailjs.send(
      'service_jhubkfd',
      'template_wwdqlmm',
      templateParams,
      'user_6D90rJqxqmgWJuH5bQXRT'
    )
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

    resetForm();

  }

  function resetForm() {
    setName('');
    setEmail('');
    setSubject('')
    setMessage('');
  }

  return(
    <div className="contact-body" id="contact">
      <div className="site-nav-social">
        <div className="contact-icons-list">
          <div className="contact-icons" onClick={()=>openModal()}>
            <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={{
              content: {
                height: "40%",
                marginTop: "10rem",
                fontFamily:"Roboto, Helvetica, sans-serif",
                backgroundColor: '#0d1117'
              }
            }}
            >
              <div className="-body">
                  <h2 className="section-title">
                    Contact me:
                  </h2>
                  <button className="close-modal" onClick={closeModal}>X</button>
                  <div className="email-form">
                    <form className="form-layout" name="Emailform" onSubmit={(event)=> {handleSubmit(event)
                    resetForm()}}>
                            <div className="form-field">
                              <span>Name: </span>
                            </div>
                            <div className="form-field">
                              <input
                                type='text'
                                size={size}
                                name='ContactName'
                                value={name}
                                onChange={(event)=>setName(event.currentTarget.value)}
                                placeholder="Enter Name"
                                required />
                            </div>
                            <div className="form-field">
                              <span>Your Email Address: </span>
                            </div>
                            <div className="form-field">
                              <input
                                type='email'
                                size={size}
                                name='ContactEmail'
                                value={email}
                                onChange={(event)=>setEmail(event.currentTarget.value)}
                                placeholder="Enter Email"
                                required />
                            </div>
                            <div className="form-field">
                              <span>Subject: </span>
                            </div>
                            <div className="form-field">
                              <input
                                type='text'
                                size={size}
                                name='ContactName'
                                value={subject}
                                onChange={(event)=>setSubject(event.currentTarget.value)}
                                placeholder="Enter Subject"
                                required />
                            </div>
                            <div className="form-field">
                              <span>Message: </span>
                            </div>
                            <div className="form-field">
                              <textarea
                                name='ContactComment'
                                rows='10'
                                cols='30'
                                onChange={(event)=>setMessage(event.currentTarget.value)}
                                placeholder="Enter Message"
                                required />
                            </div>
                            <div className="form-field">
                              <input type='submit' value='Submit' />
                            </div>
                      </form>
                  </div>
              </div>
            </Modal>
          </div>
          <a className="contact-icons" href="https://www.linkedin.com/in/jeffrey-lee-01" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
          </a>
          <a className="contact-icons" href="https://github.com/ryuuohlee" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;