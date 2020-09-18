import React, { Component } from 'react';
// 1,4,6
import firstimage from '../../../assets/05_Desktop.jpg';
import secondimage from '../../../assets/08_Desktop.jpg';
import thirdimage from '../../../assets/10_Desktop.jpg';
import Slider from '../SectionSlider/Slider/Slider';

class SectionSlider extends Component {
  state = {
    title: 'VERSATILE UTILITY',
    sliderArr: [
      {
        imageUrl: firstimage,
        text:
          'With up to 3,500 pounds of payload capacity and adjustable air suspension, Cybertruck is the most powerful tool we have ever built, engineered with 100 cubic feet of exterior, lockable storage — including a magic tonneau cover that is strong enough to stand on.',
      },
      {
        imageUrl: secondimage,
        text:
          'Seat six comfortably with additional storage under the second-row seats. Complete with an advanced 17” touchscreen with an all-new customized user interface.',
      },
      {
        imageUrl: thirdimage,
        text:
          'From rugged to refined, Cybertruck is completely adaptable for your needs. Prepare for every experience with a versatile utilitarian design — including on-board power and compressed air.',
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.sliderArr.map((slide) => {
          return (
            <Slider
              imageUrl={slide.imageUrl}
              text={slide.text}
              title={this.state.title}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default SectionSlider;
