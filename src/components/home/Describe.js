import React, { Component } from 'react';
import * as utils from '../../common/utils';
import DescribeBg from '../../assets/images/middle-bg.png';
import Clock1 from '../../assets/images/clock-1.png';
import Clock2 from '../../assets/images/clock-2.png';
import Clock3 from '../../assets/images/clock-3.png';
import Clock4 from '../../assets/images/clock-4.png';
import Clock5 from '../../assets/images/clock-5.png';
import ListItem from '../controls/ListItem';

const classes = utils.createStyles('Describe', {
    container: {
      background: `url(${DescribeBg}) no-repeat`,
      position: 'relative',
      backgroundSize: 'contain',
      height: '62rem',
      color: 'white',
    },
    listview: {
      width: '71%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    title: {
      fontSize: '2.68rem',
      marginBottom: '4.2rem',
    },
    leftList: {
      position: 'absolute',
      // right: 'calc(50% + 400px)',
      top: '12rem',
      display: 'flex',
      flexDirection: 'column',
      width: '32.5rem',
    },
    rightList: {
      position: 'absolute',
      width: '33.5rem',
      left: '44%',
      top: '12rem',
      display: 'flex',
      flexDirection: 'column',
    },
});

class Describe extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.leftList}>
          <span className={classes.title}>Refundit בלי ־</span>
          <div className={classes.listview}>
            <ListItem icon={Clock5} text='ממלאים טפסים מתישים'/>
            <ListItem icon={Clock4} text='עומדים בתור בלתי נגמר במכס'/>
            <ListItem icon={Clock3} text='מקבלים החזר רק במספר מוגבל של חנויות '/>
            <ListItem icon={Clock2} text='משלמים עמלה מנופחת של  60% - 30%'/>
          </div>
        </div>
        <div className={classes.rightList}>
          <span className={classes.title}>Refundit עם ־</span>
          <div className={classes.listview}>
              <ListItem icon={Clock5} text='משלימים את התהליך במהירות וללא טפסים'/>
              <ListItem icon={Clock1} text='מקבלים החזר על קניות בכל החנויות'/>
              <ListItem icon={Clock4} text='משלמים רק 9% עמלה'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Describe;
