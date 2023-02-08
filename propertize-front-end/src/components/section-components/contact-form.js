import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormData from 'form-data';
import axios from 'axios';
import API_HOST from '../../configs'

const ContactForm = () => {
  let publicUrl = process.env.PUBLIC_URL+'/'
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const messageForm = new FormData();
  messageForm.append('category', category);
  messageForm.append('name', name);
  messageForm.append('phone', phone);
  messageForm.append('email', email);
  messageForm.append('subject', subject);
  messageForm.append('message', message);
 console.log(messageForm)
  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_HOST}/contact-us/new`, messageForm,
      { headers: {'Content-Type': 'application/json'}});
      if (response.status === 201) {
        history.push('/');
      };
    } catch (error) {
      console.log(error);
    };
  
}
  return (
  <div className="contact-page-area pd-top-120">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-7 mb-5 mb-lg-0">
        <div className="contact-details-inner mng-box-shadow">
          <h4>Adipisicing elit se tempor labore .</h4>
          <p>Lorem ipsum dolor  consectetur aLorem ipsum   consectetur adipisicing elit, eiusmod tempor incididunt labore et dolore magna aliqua.minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
          <div className="row">
            <div className="col-md-6">
              <div className="contact-single-list">
                <h5>Kenyan Office</h5>
                <ul>
                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" /> Mombasa Road, Nairobi, Kenya</li>
                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />  +254 712345678</li>

                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-single-list">
                <h5>Tanzania Office</h5>
                <ul>
                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" /> Sam Nujoma Road, Dar es Salaam, Tanzania</li>
                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" /> +255 787654321</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="contact-single-date">
                <p><strong>Monday-Friday:</strong> 9am - 8pm</p>
                <p><strong>Saturday:</strong> 10 am to 3 pm</p>
                <p><strong>Sunday: </strong> Clossed</p>
              </div>
            </div>
            <div className="col-md-6 align-self-center text-md-right">
              <ul className="social-area style-3">
                <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fab fa-skype" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-5">
        <form method='post' onSubmit={handleSubmit}>
          <div className="row">
          <div className="col-lg-6 col-md-6">
              <label className="single-input-inner style-bg-border">
                <input type="text" placeholder="Category" required
                  onChange={(e) => setCategory(e.target.value)}
                />
              </label>
            </div>
            <div className="col-lg-6 col-md-6">
              <label className="single-input-inner style-bg-border">
                <input type="text" placeholder="Subject"  required
                  onChange={(e) => setSubject(e.target.value)}
                />
              </label>
            </div>
            <div className="col-xl-12 col-lg-6">
              <label className="single-input-inner style-bg-border">
                <input type="text" placeholder="Name" required
                onChange={(e) => setName(e.target.value)} />
              </label>
            </div>
            <div className="col-md-6">
              <label className="single-input-inner style-bg-border">
                <input type="text" placeholder="Email" required
                onChange={(e) => setEmail(e.target.value)} />
              </label>
            </div>
            <div className="col-md-6">
              <label className="single-input-inner style-bg-border">
                <input type="text" placeholder="Phone"  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
            </div>
            <div className="col-12">
              <label className="single-input-inner style-bg-border">
                <textarea placeholder="Message" defaultValue={""} required
                onChange={(e) => setMessage(e.target.value)} />
              </label>
            </div>
            <div className="col-12 mb-4">
              <button className="btn btn-base" onSubmit={handleSubmit}>Submit Now</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="contact-page-map mg-top-100">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198059.49240377638!2d-84.68048827338674!3d39.13652252762691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1615660592820!5m2!1sen!2sbd" />
  </div>
</div>
)
}

export default ContactForm