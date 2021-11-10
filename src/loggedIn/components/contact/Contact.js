import React, {useState} from 'react';
import styled from 'styled-components';
import emailjs from "emailjs-com";
import Helmet from "react-helmet";

const Contact = (props)=> {

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_jzucn2y",
        "template_7lx41d9",
        e.target,
        "user_UyswRsHeLVHb6DDdODSRr"
    ).then(res => {
        console.log(res);
    }).catch(err => console.log(err));
}

    const [message, setMessage] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }
    
    return (
      <div>
        <Helmet>
          <title>Josh Creative Programer Tech Blog</title>
          <meta
            name="description"
            content="Josh Creativve Programer is located at Asaba street kasese, bwera, fort portal, bundibugyo, mbarara road, uganda. for more information call +256772951826"
          />
          <meta
            name="keywords"
            content="kasese, bwera, fort portal, bundibugyo, mbarara road, uganda."
          />
          <link rel="apple-touch-icon" href="/jcp.png" />
          <style type="text/css"></style>
        </Helmet>
        <Container id="contact">
          <h2>Contact Me</h2>
          <p>
            Please type your full name and correct email if you want to connect
            with me / follow the address below to find me in person / call or
            email me directly on the phone numbers and emails below
          </p>
          <ContactWrapper>
            <Content>
              <Address>
                <h3>Address</h3>
                <p>1345 Asaba Street</p>
                <p>Kasese-Mbarara Road, Saluti 'A'</p>
              </Address>
              <Phone>
                <h3>Phone</h3>
                <p>0772951826</p>
                <p>0703605680</p>
              </Phone>
              <Email>
                <h3>Email</h3>
                <p>jcp256@gmail.com</p>
                <p>djjosh644@outlook.com</p>
                <p>bwambalejoshua101@email.com</p>
              </Email>
            </Content>
            <ContactForm onSubmit={handleSubmit}>
              <form onSubmit={sendEmail}>
                <Inputbox>
                  <h2>Send Message</h2>
                  <input type="text" name="name" required="required" />
                  <span>Full Name</span>
                </Inputbox>

                <Inputbox>
                  <input type="text" name="user_email" required="required" />
                  <span>Email</span>
                </Inputbox>

                <Inputbox>
                  <textarea name="message" required="required"></textarea>
                  <span>Type your Message...</span>
                </Inputbox>
                <Inputbox>
                  <input type="submit" value="Send" />
                </Inputbox>
                {message && <span>Message Submitted Successfully,</span>}
                {message && <span> I will reply ASAP ;)</span>}
              </form>
            </ContactForm>
          </ContactWrapper>
        </Container>
      </div>
    );
}

export default Contact;

const Container = styled.div`
width: 100%;
margin: 0;
justify-content: center;
align-items: center;
padding: 0;
box-sizing: border-box;
font-family: 'Poppins', sans-serif;
padding: 20px;
background: url("/images/contact1.jpg") center center / cover no-repeat fixed;
h2{
    color: #fff;
}

p {
    color: #fff;
}
`;

const ContactWrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
padding: 30px;

@media (max-width: 991px) {
    width: 100%;
    display: flex;
    flex-direction: column;
}

`;

const Content = styled.div`
display: flex;
flex-direction: column;
max-width: 800px;
position: relative;
gap: 12px;
font-size: 16px;
font-weight: 300;

@media (max-width: 991px) {
    width: 100%;
    margin-bottom: 40px;
}


`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  background: #fff;
  padding: 20px;
  @media (max-width: 991px) {
    width: 100%;
    span {
      color: green;
    }
    form {
      span {
        color: green;
      }
    }
  }
`;

const Address = styled.div`
h3 {
    font-size: 29px;
    font-weight: 500;
    color: #00bcd4;
}

p {
    font-weight: 300;
    letter-spacing: 1px;
    color: #fff;
}
`;

const Phone = styled.div`
h3 {
    font-size: 24px;
    font-weight: 500;
    color: #00bcd4;
}

p {
    font-weight: 300;
    letter-spacing: 1px;
    color: #fff;
}
`;

const Email = styled.div`
h3 {
    font-size: 19px;
    font-weight: 500;
    color: #00bcd4;
}
  
p {
    font-weight: 300;
    letter-spacing: 1px;
    color: #fff;
}
`;

const Inputbox = styled.div`
width: 100%;
position: relative;
margin-top: 10px;

h2 {
    font-size: 30px;
    margin-bottom: 8px;
    color: #00bcd4;
    font-weight: 500;
};

input {
    width: 100%;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;

    &:focus ~ span {
        color: #e91e63;
        font-size: 12px;
        transform: translateY(-20px);
}

&:valid ~ span {
        color: #e91e63;
        font-size: 12px;
        transform: translateY(-20px);
}

}

textarea {
    width: 100%;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;
    overflow-y: hidden;

    &:focus ~ span {
        color: #e91e63;
        font-size: 12px;
        transform: translateY(-20px);
}

&:valid ~ span {
        color: #e91e63;
        font-size: 12px;
        transform: translateY(-20px);
}

}

span {
    position: absolute;
    left: 0;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    pointer-events: none;
    transition: 0.6s;
    color: #666;
}

input[type="submit"] {
    width: 100px;
    background: #00bcd4;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 18px;

    &:hover {
        background: lightseagreen;
        color: #444;
    }

}

`;