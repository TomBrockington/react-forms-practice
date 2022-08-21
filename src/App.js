import { useState } from "react";
import "./App.css";

export default function App() {
  //TODO: Add your state fields here
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    country: '',
    complaint: '',
    consent: false,
    contact: 'email'
  })

  const onChange = (e) => {
    const { value, name, checked, type } = e.target

    setFormData((formData) => ({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const showData = () => {
    console.log('form', formData);
    console.log('name', formData.name);
    console.log('add', formData.address);
    console.log('phone', formData.phoneNumber);
    console.log('email', formData.email);
    console.log('country', formData.country);
    console.log('complaint', formData.complaint);
    console.log('consent', formData.consent);
    console.log('contact', formData.contact);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input 
              type="text" 
              name="name" 
              required
              onChange={onChange}
              value={formData.name}
              />
          </label>

          <label>
            Address
            <input 
              type="text" 
              name="address"
              onChange={onChange}
              value={formData.address} 
              />
          </label>
          <label>
            Phone Number
            <input 
              type="tel" 
              name="phoneNumber" 
              onChange={onChange}
              value={formData.phoneNumber}
              />
          </label>

          <label>
            Email  
            <input 
              type="email" 
              name="email" 
              onChange={onChange}
              value={formData.email}
              />
          </label>

          <label>
            Country:
            <select 
              name="country" 
              onChange={onChange} 
              value={formData.country}
              >

              <option value="us">U.S.</option>
              <option value="canada">Canada</option>
              <option value="england">England</option>
            </select>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={onChange}
              value={formData.complaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input 
                type="radio" 
                name="contact" 
                onChange={onChange}
                checked={formData.contact === 'phone'}
                value="phone" />
              Phone
            </label>

            <label>
              <input 
                type="radio" 
                name="contact" 
                onChange={onChange}
                checked={formData.contact === 'email'}
                value="email" />
              Email
            </label>

            <label>
              <input 
                type="radio" 
                name="contact" 
                onChange={onChange}
                checked={formData.contact === 'post'}
                value="post" />
              Slow Mail
            </label>

            <label>
              <input 
                type="radio" 
                name="contact" 
                onChange={onChange}
                checked={formData.contact === 'none'}
                value="none" />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input 
              type="checkbox" 
              name="consent" 
              onChange={onChange}
              value={formData.consent}
              id="consent" />
          </label>
        </div>

        <input 
          type="submit" 
          value="Submit!"
          onClick={showData}
           />
      </form>
    </>
  );
}
