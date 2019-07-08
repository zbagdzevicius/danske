import React from 'react';
import classnames from 'classnames';

import styles from './button.scss';

const Button = ({ onClick, label, disabled }) => {
    const buttonClasses = classnames(
        styles['button'],
        disabled && styles['disabled'],
    );

    return (
        <div
            className={ buttonClasses }
            onClick={ !disabled ? onClick : undefined }
        >
            { label }
        </div>
    );
};

export default Button;
