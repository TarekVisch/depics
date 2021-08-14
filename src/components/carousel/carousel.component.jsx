import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {
          slideId: 'asd',
          indicatorId: 'ran',
          src: 1
        },
        {
          slideId: 'fgh',
          indicatorId: 'kan',
          src: 2
        },
        {
          slideId: 'jkl',
          indicatorId: 'ban',
          src: 3
        },
        {
          slideId: 'qwe',
          indicatorId: 'bom',
          src: 4
        }
      ],
      currentSlide: 0
    };
  }

  handleIndicatorClick = (index) => {
    this.setState({ currentSlide: index });
  };

  componentDidMount() {
    this.carouselIntervalId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.currentSlide >= prevState.slides.length - 1) {
          return { currentSlide: 0 };
        }
        return { currentSlide: prevState.currentSlide + 1 };
      });
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.carouselIntervalId);
  }

  // slideToRight = () => {
  //   const nextSlide = (this.state.currentSlide + 1) % this.state.slides.length;
  //   this.setState({ currentSlide: nextSlide });
  // };

  // slideToLeft = () => {
  //   let prevSlide = (this.state.currentSlide - 1) % this.state.slides.length;
  //   prevSlide = prevSlide === -1 ? this.state.slides.length - 1 : prevSlide;
  //   this.setState({ currentSlide: prevSlide });
  // };

  render() {
    const { currentSlide, slides } = this.state;
    // const nextSlide = (currentSlide + 1) % slides.length;
    // let prevSlide = (currentSlide - 1) % slides.length;
    // prevSlide = prevSlide === -1 ? slides.length - 1 : prevSlide;

    return (
      <div className="carousel">
        <div className="carousel__slides">
          {slides.map((slide, index) => (
            <div
              key={slide.slideId}
              className={`carousel__slide${
                currentSlide === index ? ' currentSlide' : ''
              }`}
            >
              Slide {slide.src}
            </div>
          ))}
        </div>
        <div className="carousel__indicators">
          {slides.map((slide, index) => (
            <button
              key={slide.indicatorId}
              onClick={() => this.handleIndicatorClick(index)}
              className={`btn btn-carousel-indicator${
                currentSlide === index ? ' currentIndicator' : ''
              }`}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
