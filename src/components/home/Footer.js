import React, { Component } from 'react';
import * as utils from '../../common/utils';
import PhoneIcon from '../../assets/images/contact_phone.png';
import FacebookIcon from '../../assets/images/facebook_icon.png';
import LinkedinIcon from '../../assets/images/linkedin_icon.png';

const classes = utils.createStyles('Footer', {
    container: {
    },
    greenSection: {
      background: '#00ad96',
      height: 100,
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 50px',
      color: 'white',
      minWidth: 1100,
    },
    text: {
      color: '#00ad96',
      fontSize: 18,
    },
    links: {
      display: 'flex',
      alignItems: 'center',
      marginRight: 40,
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
    },
    right: {
      fontSize: 25,
    },
    info: {
      fontSize: 27,
      marginRight: 40,
    },
    contactIcon: {
      cursor: 'pointer',
      marginRight: 10,
    }
});

class Footer extends Component {
  render() {
    return (
      <div className={classes.container}>
        <span className={classes.text}>במקרים מסויימים תיתכן בקשה להגעה למכס, תקבלו הודעה על כך 4 שעות לפני הטיסה**</span>
        <span className={classes.text}>מוגבל למבקשי החזר באפליקציה בספטמבר-אוקטובר 2018 קוד קופון בלגיה2018 למימוש ההטבה עם שובכם לישראל*</span>
        <div className={classes.greenSection}>
          <div className={classes.flex}>
            <div className={classes.links}>
              <a href='https://www.facebook.com/RefunditIsrael' target='_blank'><img src={FacebookIcon} className={classes.contactIcon}/></a>
              <a href='https://www.linkedin.com/company/refundit-ltd' target='_blank'><img src={LinkedinIcon} className={classes.contactIcon}/></a>
              <img src={PhoneIcon} className={classes.contactIcon}/>
            </div>
            <span className={classes.info}>054-7171971</span>
            <span className={classes.info}>support@refundit.tax</span>
          </div>
          <div className={classes.right}>
            .כל הזכויות שמורות ,© Refundit 2018.
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
