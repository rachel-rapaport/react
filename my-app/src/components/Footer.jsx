import React from "react";
import  {Link} from "react-router-dom"
import './layoutStyle.css';

export default function About(){
   
    return(
        <div className="footer">
            <div className="footer-content">
                <p>tip for trip</p>
                <Link to={'/about'}>----about-----</Link>
            </div>
            <div className="rights"><h5 >כל הזכיות שמורות</h5></div>
        </div>
       
        
    );
}