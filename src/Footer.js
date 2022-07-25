import './Footer.css'
import PinkSmile from './images/icons/SmileIcon.svg';
import Smile from './images/icons/Smile.svg';
import Eye from './images/icons/Eye.svg';
import GreenSmile from './images/icons/GreenSmile.svg';
import SmileForGreen from './images/icons/SmileForGreen.svg';
import GreenEye from './images/icons/GreenEye.svg';
import facebook from './images/icons/facebook.svg';
import linkidin from './images/icons/linkidin.svg';
import twitter from './images/icons/twitter.svg';
import pinterest from './images/icons/pinterest.svg';

function Footer() {
    return (
    <footer className="App-footer">
      <div>
        <img className='PinkSmile' src={PinkSmile} alt="PinkSmile"></img>
        <img className='Smile' src={Smile} alt="smile"></img>
        <img className='Eye-1' src={Eye} alt="Eye"></img>
        <img className='Eye-2' src={Eye} alt="Eye"></img>
        <img className='GreenSmile' src={GreenSmile} alt="face"></img>
        <img className='SmileForGreen' src={SmileForGreen} alt="face"></img>
        <img className='GreenEye-1' src={GreenEye} alt="face"></img>
        <img className='GreenEye-2' src={GreenEye} alt="face"></img>
      </div>
      <div className='link'>
        <a href='https://www.facebook.com/zenBitTech/' target="_blank" rel="noreferrer">
            <img className='facebook' src={facebook} alt="facebook"></img>
        </a>
        <a href='https://www.linkedin.com/company/zenbit-tech/' target="_blank" rel="noreferrer"> 
            <img className='linkidin' src={linkidin} alt="linkidin"></img>
        </a> 
        <a href='https://twitter.com/' target="_blank" rel="noreferrer">
            <img className='twitter' src={twitter} alt="twitter"></img>
        </a> 
            <img className='pinterest' src={pinterest} alt="pinterest"></img>
      </div>
      </footer>
)}

export default Footer