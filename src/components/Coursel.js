import React, { Component } from 'react';
import {
    UncontrolledCarousel
  } from 'reactstrap';

class MyComponent extends Component {

      constructor(props) {
      super(props);

        // Must initialize state first
        this.state = { modal: false };
     }
  
    render() {
        const items = [
            {
              src: 'https://images.surfacemag.com/app/uploads/2017/11/09102819/Polestar1-black.jpg',
              altText: 'Slide 1',
              caption: 'Slide 1',
              header: 'Slide 1 Header',
              key: '1',
              height: '300px'
            },
            {
              src:'https://www.hdcarwallpapers.com/walls/exotic_lamborghini_car-wide.jpg',
              altText: 'Slide 2',
              caption: 'Slide 2',
              header: 'Slide 2 Header',
              key: '2',
              height: '300px'
            },
            {
              src: 'https://mcdn.wallpapersafari.com/medium/25/7/f8CFQk.jpg',
              altText: 'Slide 3',
              caption: 'Slide 3',
              header: 'Slide 3 Header',
              key: '3',
              height: '300px'
            }
          ];
          
    return (
            <UncontrolledCarousel items={items} />    
    );
  }
}

export default MyComponent;
