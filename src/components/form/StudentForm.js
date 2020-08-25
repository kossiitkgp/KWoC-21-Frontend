import React, { useState, useEffect  } from 'react';
import '../../styles/Form.scss';
import '../../styles/css-fontello-github-circled/fontello.css';
import '../../styles/css-fontello-mail-alt/fontello.css';

export default function Form(props) {
  
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [college, setCollege] = useState('')

  useEffect(() => {
    const { username, name, email } = props.location.state
    // filling the default values in the form using the data obtained from github OAuth
    setUsername(username)
    setName(name)
    setEmail(email)
  },[])
  
  function handleSubmit(e) {
    e.preventDefault();

    const URL = "http://localhost:5000/student/form"
    const data = {
      'username': username,
      'name': name,
      'email': email,
      'college': college,
     }

     console.log("data is ",JSON.stringify(data))
    
    fetch(URL, {
      method: 'POST',
      headers: {
        'Bearer': localStorage.getItem('student_jwt')
      },
      data: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      if(res.status === 200)
        props.history.push('/dashboard/student')
    })
    .catch(err => {
      console.log('err in student form ', err)
    })

  }

  
  
  return (
    <div className='box'>

    <h2>Student Form</h2>
      <h3>Welcome {username}</h3>

          <div className='field'>
        <label className='label'>Name</label>
        <div className='control'>
          <input
            className='input is-rounded is-info'
            type='text'
            placeholder='Name'
            defaultValue={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
      </div>

      <div className='field'>
        <label className='label'>Email</label>
        <div className='control has-icons-left has-icons-right'>
          <input
            className='input is-rounded is-info'
            type='text'
            placeholder='Email'
            defaultValue={email}
            onChange={e => setEmail(e.target.value)}
          />
          <span className='icon is-large is-left' id='fontello-icon'>
            <i className='icon-mail-alt' />
          </span>
        </div>
      </div>


      <div className='field'>
        <label className='label'>College</label>
        <div className='control'>
          <input
            className='input is-rounded is-info'
            type='text'
            placeholder='College name'
            onChange={e => setCollege(e.target.value)}
          />
        </div>
      </div>


      <div>
        <a class='button is-info is-rounded is-fullWidth column is-full' onClick={handleSubmit}>
          Submit
        </a>
      </div>
    </div>
  );
}
