import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Brownies from '../images/food/brownies.jpg';
import Cheesecake from '../images/food/cheesecake.jpg';
import Texmex from '../images/food/texmex-bowl.jpg';
import Chickpeas from '../images/food/chickpeas.jpg';
import LemonSalmon from '../images/food/lemon-salmon.jpg';
import LoMein from '../images/food/lomein.jpg';
import MealPrep from '../images/food/meal-prep.jpeg';
import PackagedBrownies from '../images/food/packaged-brownies.jpg';
import Salmon from '../images/food/salmon.jpg';
import CherickServingFood from '../images/food/cherick-serving-food.jpg';
import CherickServingFood2 from '../images/food/cherick-serving-food-2.jpg';
import CherickTableMenu from '../images/food/cherick-table-menu.jpg';
import Card from '../images/food/card.jpg';
import Swag1 from '../images/food/swag1.jpg';
import Swag2 from '../images/food/swag2.jpg';
import Swag3 from '../images/food/swag3.jpg';
import Support1 from '../images/food/support1.jpg';
import Support2 from '../images/food/support2.jpg';
import CherickWithMask from '../images/food/cherick-with-mask.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const GlobalStyle = createGlobalStyle`
.slick-slide {
  width: fit-content;
}
`

const carouselSettings = {
    accessibility: true,
    arrows: true,
    autoplay: true,
    draggable: true,
    infinite: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    dots: true,
};

const SliderContainer = styled.div`
  width: 83%;
  height: 300px;
  background-color: #E77878;
  padding: 30px;
`

export const IntroSlider = () => {

    const renderSlides = () =>
    [Card, Brownies, Support1, Cheesecake, Swag1, Chickpeas, LemonSalmon, Swag2, LoMein, Texmex, Swag3, PackagedBrownies, MealPrep, Support2, Salmon, CherickServingFood, CherickServingFood2, CherickTableMenu, CherickWithMask].map(slide => (
      <div key={slide}>
        <img src={slide} alt={`Image of Cherick's ${slide}`} style={{width: '300px', height: '300px', margin: 'auto'}} />
      </div>
    ));
    return (
        <>
        <GlobalStyle />
        <SliderContainer>
            <Slider {...carouselSettings}>
               {renderSlides()}
            </Slider>
        </SliderContainer>
        </>
    )
}