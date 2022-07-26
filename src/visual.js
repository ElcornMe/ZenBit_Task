import './App.css';
import map from './images/map.jpg';
import PinkSmileHead from './images/icons/SmileIcon.svg';
import SmileHead from './images/icons/Smile.svg';
import EyeHead from './images/icons/Eye.svg';
import YellowFace from './images/icons/YellowFace.svg';
import YellowSmile from './images/icons/YellowSmile.svg';
import YellowEye from './images/icons/YellowEye.svg';
import cloud from './images/icons/cloud.svg';
import GreenFace from './images/icons/GreenFace.svg';
import Drop from './images/icons/Drop.svg';
import light from './images/icons/light.svg';

function Visual() {
    return(
        <div>
        <img className='Map' src={map} alt="map"></img>
        
        <img className='PinkSmileHead' src={PinkSmileHead} alt="PinkSmile"></img>
        <img className='SmileHead' src={SmileHead} alt="smile"></img>
        <img className='EyeHead-1' src={EyeHead} alt="Eye"></img>
        <img className='EyeHead-2' src={EyeHead} alt="Eye"></img>
        
        
        <img className='YellowFace' src={YellowFace} alt="YellowFace"></img>
        <img className='YellowSmile' src={YellowSmile} alt="YellowSmile"></img>
        <img className='YellowEye-1' src={YellowEye} alt="Eye"></img>
        <img className='YellowEye-2' src={YellowEye} alt="Eye"></img>

        <img className='GreenFace' src={GreenFace} alt="GreenFace"></img>
        
        <img className='cloud-1' src={cloud} alt="cloud"></img>

        <img className='cloud-2' src={cloud} alt="cloud"></img>
        
        <img className='Drop-1' src={Drop} alt="Drop"></img>
        <img className='Drop-2' src={Drop} alt="Drop"></img>
        <img className='Drop-3' src={Drop} alt="Drop"></img>

        <img className='light' src={light} alt="light"></img>
        </div>
    )
}

export default Visual;