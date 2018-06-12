import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';

const fullPageOptions = {
    // for mouse/wheel events
    // represents the level of force required to generate a slide change on non-mobile, 10 is default
    scrollSensitivity: 7,

    // for touchStart/touchEnd/mobile scrolling
    // represents the level of force required to generate a slide change on mobile, 10 is default
    touchSensitivity: 7,
    scrollSpeed: 500,
    hideScrollBars: true,
    enableArrowKeys: true
};

const horizontalSliderProps = {
    name: 'horizontalSlider1', // name is required
    infinite: true, // enable infinite scrolling
};

const horizontalSlides = [
    <Slide> Slide 2.1 </Slide>,
    <Slide> Slide 2.2 </Slide>
];
horizontalSliderProps.slides = horizontalSlides;

const slides = [
    <Slide> Slide 1 </Slide>,
    <HorizontalSlider {...horizontalSliderProps}></HorizontalSlider>,
    <Slide> Slide 3 </Slide>
];
fullPageOptions.slides = slides;

<Fullpage {...fullPageOptions} />
