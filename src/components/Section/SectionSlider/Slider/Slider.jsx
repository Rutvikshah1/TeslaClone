import React from 'react';

import classes from './Slider.module.css';

const slider = (props) => {
  return (
    <React.Fragment>
      <div className={classes.wrapper}>
        <div className={classes.wrapper_one}>
          <img src={props.imageUrl} alt="" />
        </div>

        <div className={classes.detailed_wrapper}>
          <div className={classes.wrapper_two}>
            <h3>{props.title}</h3>
          </div>
          <div className={classes.wrapper_three}>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default slider;
