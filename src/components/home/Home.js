import React, { Component } from 'react';
import * as utils from '../../common/utils';
import Front from './Front';
import RefundStep from './RefundStep';
import Describe from './Describe';
import AboutUs from './AboutUs';
import Footer from './Footer';

const classes = utils.createStyles('Home', {
    container: {
    }
});

class Home extends Component {
  render() {
    return (
      <div className={classes.container}>
        <Front />
        <RefundStep />
        <Describe />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default Home;
