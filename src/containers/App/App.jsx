import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';
import SectionSlider from '../../../src/components/Section/SectionSlider/SectionSlider';
import Footer from '../../components/Footer/Footer';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <Section />
        <SectionSlider />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
