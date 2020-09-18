import React from 'react';
import classes from '../Sectioninfo/Sectioninfo.module.css';

const Sectioninfo = (props) => {
  return (
    <React.Fragment>
      <section>
        <div
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <img src={props.imageUrl} className={classes.section_image} alt="" />

          <div className={classes.wrapper}>
            <div className={classes.wrapperone}>
              <h2>{props.title}</h2>
            </div>

            <div className={classes.wrappertwo}>
              <p className={classes.information}>{props.text}</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Sectioninfo;
