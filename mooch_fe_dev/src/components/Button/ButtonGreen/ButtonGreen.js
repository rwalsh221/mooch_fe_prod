import React from 'react';
import classes from './ButtonGreen.module.css';

const ButtonGreen = ({ contentProps, disabledProps, onClickProps }) => {
  return (
    <button
      className={classes.button_green}
      disabled={disabledProps}
      onClick={onClickProps}
    >
      {contentProps}
    </button>
  );
};

export default ButtonGreen;
