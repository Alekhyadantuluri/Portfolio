import React, { useEffect } from 'react';
import "../css/HeroSection.css";
import axios from 'axios';
function HeroSection() {
    // useEffect(async()=>{
    //     await axios.get('http://localhost:3000/data').then((res)=>{
    //         console.log(res.data)
    //     })
    // },[])
    return (
        <div className='HeroParent'>
            <div className='HeroChild'>
                <div className="Name">
                    <div>I'M Alekya</div>
                    <span>Front-end</span> Developer
                </div>
                <div className="Description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat <br/>placerat lobortis. 
                Natoque rutrum semper sed suspendisse nunc lectus.
                </div>
                <button><>HIRE ME</> <img src="/assets/images/Vector.png" /></button>
            </div>
        </div>
    );
}

export default HeroSection;