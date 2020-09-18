import React, { Component } from 'react';

import Headerpart from './Headerpart/Headerpart';

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Headerpart />
      </React.Fragment>
    );
  }
}

export default Header;
