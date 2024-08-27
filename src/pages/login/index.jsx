import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Index = () => {
    const [form, setForm] = useState({})
    const navigate = useNavigate()
    const [isError, setIsError] = useState(false);
    const handleChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]:value})
        setIsError(false);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(form.username === 'Admin' && form.password == '0818'){
            navigate('/admin')
        } else if(form.username === 'User' && form.password == '0818'){
          navigate('./user')
        }   
        else {
          setIsError(true);
        }
    }
  return (
    <>
    <div className="background">
      <div className="shape" />
      <div className="shape" />
    </div>
    <form onSubmit={handleSubmit}>
      <h3 className='form_title'>Login Here</h3>
      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Email or Phone" name  ="username" onChange={handleChange} style={{
          border: isError ? "2px solid red" : "2px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          outline: "none",
        }} />
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" name    ="password" onChange={handleChange} style={{
          border: isError ? "2px solid red" : "2px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          outline: "none",
        }}/>
      <button type='submit'>Log In</button>
      <div className="social">
        <div className="go">
          <i className="fab fa-google" /> Google
        </div>
        <div className="fb">
          <i className="fab fa-facebook" /> Facebook
        </div>
      </div>
    </form>
  </>
  
  )
}

export default Index