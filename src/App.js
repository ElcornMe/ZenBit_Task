import './App.css';
import map from './images/map.jpg';
import { useState } from 'react';
import Footer from './Footer';
import PinkSmileHead from './images/icons/SmileIcon.svg';
import SmileHead from './images/icons/Smile.svg';
import EyeHead from './images/icons/Eye.svg';
import YellowFace from './images/icons/YellowFace.svg';
import YellowSmile from './images/icons/YellowSmile.svg';
import YellowEye from './images/icons/YellowEye.svg';
import cloud from './images/icons/cloud.svg';




function App() {
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
      const response = await fetch("https://murmuring-sea-33658.herokuapp.com/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
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
    <div className="App">
      <header className="App-header">
        
        <form onSubmit={handleSubmit} autoComplete="off" >
        <h2>Reach out to us!</h2>
        <input required className="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name*"></input>
        <input required className="Mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your e-mail*"></input>
        <input required className="Message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message*"></input>
        <button className='buttonSend' type="submit" >Send message</button>
        </form>
        
        <img className='Map' src={map} alt="map"></img>
        
        <img className='PinkSmileHead' src={PinkSmileHead} alt="PinkSmile"></img>
        <img className='SmileHead' src={SmileHead} alt="smile"></img>
        <img className='EyeHead-1' src={EyeHead} alt="Eye"></img>
        <img className='EyeHead-2' src={EyeHead} alt="Eye"></img>
        
        
        <img className='YellowFace' src={YellowFace} alt="YellowFace"></img>
        <img className='YellowSmile' src={YellowSmile} alt="YellowSmile"></img>
        <img className='YellowEye-1' src={YellowEye} alt="Eye"></img>
        <img className='YellowEye-2' src={YellowEye} alt="Eye"></img>
        
        <img className='cloud-1' src={cloud} alt="cloud"></img>

        <img className='cloud-2' src={cloud} alt="cloud"></img>
        

      </header>
      <Footer />
    </div>
  );
}

export default App;
