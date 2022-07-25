import './Form.css'
import React, {useState} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from "react-phone-number-input";

function Form() {
    const [phone, setPhone] = useState('')
  return (
    <div className='form-container'>
      <PhoneInput
      defaultCountry="BY"
        placeholder="Enter phone number"
        value={phone}
        onChange={setPhone}
      />
      </div>
  );
}

export default Form;
