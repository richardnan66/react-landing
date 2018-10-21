import React, { Component } from 'react';
import GridItem from '../controls/GridItem';

import * as utils from '../../common/utils';
import GeekTime from '../../assets/images/geektime.png';
import Globes from '../../assets/images/globes.png';
import TheMarker from '../../assets/images/themarker.png';
import PlaneIcon from '../../assets/images/paper_plane.png';


const classes = utils.createStyles('AboutUs', {
    container: {
      position: 'relative',
      padding: '20px 0 110px',
    },
    flexRow: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 15,
    },
    dotLine: {
      flex: 1,
      borderTop: '1px dashed #00ad96',
    },
    text: {
      position: 'absolute',
      color: '#00ad96',
      right: 360,
      fontSize: 29,
      top: 20,
    },
    centerRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    GridItemClassName: {
      width: 350,
      display: 'flex',
      alignItems: 'center',
      marginLeft: 50,
      marginRight: 50,
      flexDirection: 'column',
    },
    GridItemIconClass: {
      height: 85,
      objectFit: 'none',
      marginBottom: 5,
    },
    GridItemTextClass: {
      fontSize: 23,
    }
});

class AboutUs extends Component {
  handleItemClick = (type) => {
    if (type === 'globes') {
      window.open('https://www.globes.co.il/news/article.aspx?did=1001241848', '_blank');
    } else if(type === 'themarker') {
      window.open('https://www.themarker.com/consumer/tourism/1.6337065', '_blank');
    } else {
      window.open('https://www.geektime.co.il/refundit-startup/', '_blank');
    }
  }
  render() {
    return (
      <div className={classes.container}>
        <span className={classes.text}>:כתבו עלינו</span>
        <div className={classes.flexRow}>
          <img src={PlaneIcon}/>
          <div className={classes.dotLine}></div>
        </div>
        <div className={classes.centerRow}>
          <GridItem
            icon={Globes} text='בלי תור ודרך הנייד: מיזם חדש  מפשט את החזר המע"מ לתיירים'
            className={classes.GridItemClassName}
            iconClassName={classes.GridItemIconClass}
            onClickItem={() => this.handleItemClick('globes')}
            textClassName={classes.GridItemTextClass}/>
          <GridItem
            icon={TheMarker} text='טסים לבלגיה החודש? אפליקציית החזרי מס מציעה 50 יורו לבזבוזים'
            className={classes.GridItemClassName}
            iconClassName={classes.GridItemIconClass}
            onClickItem={() => this.handleItemClick('themarker')}
            textClassName={classes.GridItemTextClass}/>
          <GridItem
            icon={GeekTime}
            text='הסטארטאפ החדש של אורי לוין מביא בשורה לתחום החזרי המע׳׳מ בשדה'
            className={classes.GridItemClassName}
            iconClassName={classes.GridItemIconClass}
            onClickItem={() => this.handleItemClick('geektime')}
            textClassName={classes.GridItemTextClass}/>
        </div>
      </div>
    );
  }
}

export default AboutUs;
