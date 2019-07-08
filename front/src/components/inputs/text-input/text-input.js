import React from 'react';

import styles from './text-input.scss';

const TextInput = (props) => {
    const {
        input,
        meta,
        placeholder,
    } = props;

    return (
        <div className={ styles['input-wrapper'] }>
            <input
                className={ styles['input'] }
                placeholder={ placeholder }
                { ...input }
            />
            { meta.touched && meta.error && (
                <div className={ styles['error-label'] }>
                    { meta.error }
                </div>
            ) }
        </div>
    );
};

export default TextInput;
