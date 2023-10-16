import { useState } from 'react'

export default function Form() {
  // let newValues = {name: '', email: '', password: ''};

  // function handleChange(e, field) {
  //   newValues.name = e.target.value;

  // }

  function handleChange(e) {
    setRegisterInfo(previous => ({
      ...previous,
      name: e.target.value
    }))
  }

  const [registerInfo, setRegisterInfo] = useState({name: '', email: '', password: ''});
  return (
    <form className='register-form'>
      <div className='input'>
        <label >input name:</label>
        <input type="text" onChange={(e, name) => handleChange(e, name)} />
      </div>
      <div className='input'>
        <label >input email:</label>
        <input type="text" />
      </div>
      <div className='input'>
        <label >input password:</label>
        <input type="text" />
      </div>
      <button type='button' className='register-btn' onClick={() => console.log(newValues)}>Register</button>
    </form>
  )
}

