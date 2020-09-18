import React, { Component } from 'react';

import Sectioninfo from '../SectionMain/Sectioninfo/Sectioninfo';
import secimageone from '../../../assets/02_Desktop.jpg';
import secimagetwo from '../../../assets/03_Desktop.jpg';
import secimagethree from '../../../assets/04_Desktop.jpg';

class SectionMain extends Component {
  state = {
    combinedData: [
      {
        imageUrl: secimageone,
        title: 'EXOSKELETON',
        text:
          'Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass.',
      },

      {
        imageUrl: secimagetwo,
        title: 'ULTRA-HARD 30X COLD-ROLLED STAINLESS STEEL',
        text:
          'If there was something better, we’d use it. Help eliminate dents, damage and long-term corrosion with a smooth monochrome exoskeleton that puts the shell on the outside of the car and provides you and your passengers maximum protection.',
      },
      {
        imageUrl: secimagethree,
        title: 'TESLA ARMOR \n GLASS',
        text:
          'Ultra-strong glass and polymer-layered composite can absorb and redirect impact force for improved performance and damage tolerance.',
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.combinedData.map((el) => {
          return (
            <Sectioninfo
              imageUrl={el.imageUrl}
              title={el.title}
              text={el.text}
              key={el.title}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default SectionMain;
