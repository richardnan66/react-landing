import React, { Component } from 'react';
import * as utils from '../../common/utils';
import FrontBackground from '../../assets/images/front-bg.png';
import DownloadBackground from '../../assets/images/btn_download.png';
import DownloadMark from '../../assets/images/price_mark.png';
import RightTopIcon from '../../assets/images/right-top-icon.png';
import Logo from '../../assets/images/refundit-loto.png';

const classes = utils.createStyles('Front', {
    container: {
      background: `url(${FrontBackground}) no-repeat`,
      backgroundSize: 'contain',
      position: 'relative',
      height: '64.7rem',
    },
    topcontainer: {
      position: 'relative',
    },
    center: {
      position: 'absolute',
      // bottom: '50%',
      transform: 'translate(calc(16rem), calc(27.5rem))',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      color: 'white',
      fontSize: '3.28rem',
      fontFamily: 'Rubik Regular',
      // wordSpacing: '13px',
    },
    downloadBtn: {
      background: `url(${DownloadBackground}) no-repeat`,
      width: 457,
      height: 70,
      lineHeight: '70px',
      color: 'white',
      marginTop: 35,
      fontSize: 31,
      cursor: 'pointer',
      position: 'relative',
    },
    downloadBtnIcon: {
      top: -30,
      left: -20,
      position: 'absolute',
      color: 'white'
    },
    firstText: {
      color: 'white',
      marginTop: 10,
      fontSize: 20,
    },
    text: {
      color: 'white',
      fontSize: 20,
    },
    strongText: {
      fontSize: 30,
    },
    rightTopIcon: {
      top: 0,
      right: 0,
    },
    logoIcon: {
      marginLeft: '4.2rem',
      marginTop: '3.3rem',
      width: '14rem',
    },
});

class Front extends Component {
  handleDownloadClick = () => {
    if (
      window.navigator.platform === 'iPhone' ||
      window.navigator.platform === 'iPod' ||
      window.navigator.platform === 'iPad' ||
      window.navigator.platform === 'iPhone Simulator' ||
      window.navigator.platform === 'iPod Simulator' ||
      window.navigator.platform === 'iPad Simulator' ||
      window.navigator.platform === 'Macintosh' ||
      window.navigator.platform === 'MacIntel' ||
      window.navigator.platform === 'MacPPC' ||
      window.navigator.platform === 'Mac68K' ||
      window.navigator.platform === 'Pike v7.6 release 92' ||
      window.navigator.platform === 'Pike v7.8 release 517') {

      window.open('https://itunes.apple.com/il/app/refundit/id1373203298?mt=8', '_blank');
    } else {
      window.open('https://play.google.com/store/apps/details?id=com.refundit', '_blank');
    }
  }
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.topcontainer}>
          <img src={Logo} align="left" className={classes.logoIcon}/>
          <img src={RightTopIcon} align="right" className={classes.rightTopIcon}/>
        </div>
        <div className={classes.center}>
          <span className={classes.title}>!קחו את הזמן לשופינג בבלגיה</span>
          <span className={classes.title}>וקבלו החזר מע״מ באפליקציה בקלות ומכל חנות</span>
          <div className={classes.downloadBtn} onClick={this.handleDownloadClick}>להורדת האפליקציה
            <img className={classes.downloadBtnIcon} src={DownloadMark}/>
          </div>
          <span className={classes.firstText}>בקשו החזר מע״מ באפליקציה </span>
          <span className={classes.text}> וקבלו <strong className={classes.strongText}>50 יורו מתנה</strong> לביזבוזים</span>
        </div>
      </div>
    );
  }
}

export default Front;
