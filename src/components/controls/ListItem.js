import React, { Component } from 'react';
import * as utils from '../../common/utils';

const classes = utils.createStyles('ListItem', {
    container: {
      marginBottom: '1.9rem',
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'space-between',
    },
    text: {
      // width: 300,
      width: '71%',
      textAlign: 'right',
      fontSize: '1.6rem',
      lineHeight: 1,
    },
    icon: {
      marginLeft: 20,
      width: '1.5rem',
    }
});

class ListItem extends Component {
  render() {
    const {icon, text} = this.props;
    return (
      <div className={classes.container}>
        <span className={classes.text}>{text}</span>
        <img src={icon} className={classes.icon}/>
      </div>
    );
  }
}

export default ListItem;
