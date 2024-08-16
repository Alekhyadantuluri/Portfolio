import { useState, useEffect } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../css/recomendations.css';
const Slick = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        centermode:true,
        autoplay:true,
         responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };
    const [Cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3004/Recommendations')
        .then(response => {
            console.log(response.data);
            setCards(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <>
          <div className="caurosal">
                <Slider {...settings}>
                    {Cards.map(carddata => (
                        <div className='sliderparent'>
                          <div className='caurosal_card' key={carddata.id}>
                              <img src={carddata.image} alt='rating' />
                              <div className='card_title'>{carddata.heading}</div>
                              <div className='card_description'>{carddata.description}</div>
                              <div className='card_personal_detail'>
                                  <img src={carddata.pic} alt='profile' />
                                  <div className='profile'>
                                      <div className='card_title'>{carddata.name}</div>
                                      <div className='card_description'>{carddata.profession}</div>
                                  </div>
                              </div>
                          </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}
export default Slick;