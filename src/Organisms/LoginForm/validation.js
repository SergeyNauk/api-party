import React from 'react';
import validator from 'validator';

import { styles } from './styles'; 
import { css } from 'aphrodite';

export const requiredEmail = (value) => {
    if (!value.toString().trim().length) {
      return <p ref={this.errorMessRequreEmail} className = { css(styles.errorMessageEmail) }> require</p>;
    }
  };

export const email = (value) => {
    if (!validator.isEmail(value)) {
        return <p ref={this.errorMessValidEmail} className = { css(styles.errorMessageEmail) }> {value} is not a valid email.</p>
    } 
};

export const requiredPass = (value) => {
    if (!value.toString().trim().length) {
        return <p ref={this.errorMessRequirePass} className = { css(styles.errorMessagePassword) }> require</p>;
    }
};

export const passLength = (value) => {
    if (value.toString().trim().length < 8) {
        return <p ref={this.errorMess8Symbols} className = { css(styles.errorMessagePassword) }> minimum 8 symbols</p>
    }
};
