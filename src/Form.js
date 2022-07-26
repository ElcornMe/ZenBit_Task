import './App.css';
import { useState } from 'react';


function Form() {
  const [name , setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const requestData = {
      name: name,
      email: email,
      message: message,
    };
    console.log(name)
    const requestJson = JSON.stringify(requestData);
    console.log(requestJson);
    try {
      const response = await fetch("https://mycorsproxy-netuto.herokuapp.com/https://murmuring-sea-33658.herokuapp.com/api", {
        method: "POST",
        headers: {
           'Content-Type': 'application/json',
        },
        body: requestJson,
      });
      const responseText = await response.text();
      alert(responseText);
      } catch (ex) {
      console.error("POST error!");
      }
  };

  return (
        <form onSubmit={handleSubmit} autoComplete="off" >
        <h2>Reach out to us!</h2>
        <input required className="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name*"></input>
        <input required className="Mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your e-mail*"></input>
        <input required className="Message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message*"></input>
        <button className='buttonSend' type="submit" >Send message</button>
        </form>
  )
}


export default Form;