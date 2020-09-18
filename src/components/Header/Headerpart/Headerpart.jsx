import React from 'react';

import classes from './Headerpart.module.css';
import logo from '../../../assets/carlogo.png';

const Headerpart = () => {
  // window.addEventListener('scroll', function () {
  //   const ul = document.querySelector('ul');
  //   if (window.scrollY > 0) {
  //     ul.classList.toggle('sticky');
  //   }
  // });

  return (
    <React.Fragment>
      <div className={classes.wrapper}>
        <div className={classes.bgimage}></div>
        <nav>
          <ul>
            <li>
              <a href="/#">
                <img src={logo} alt="/#" />
              </a>
            </li>
            <li>
              <a href="/#">MODEL S</a>
            </li>
            <li>
              <a href="/#">MODEL 3</a>
            </li>
            <li>
              <a href="/#">MODEL X</a>
            </li>
            <li>
              <a href="/#">MODEL Y</a>
            </li>
            <li>
              <a href="/#">SOLAR ROOF</a>
            </li>
            <li>
              <a href="/#">SOLAR PANELS</a>
            </li>
            <li>
              <a href="/#">SHOP</a>
            </li>
            <li>
              <a href="/#">SIGN IN</a>
            </li>
          </ul>
        </nav>

        <div className={classes.details_wrapper}>
          <p className={classes.information}>
            BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR
          </p>

          <a href="/#" className={classes.order}>
            ORDER NOW
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Headerpart;
