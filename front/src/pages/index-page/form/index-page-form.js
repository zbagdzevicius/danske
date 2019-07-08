import React, { Component } from 'react';
import { Form, Field, reduxForm } from 'redux-form';

import Button from 'components/button/button';
import TextInput from 'components/inputs/text-input/text-input';
import validations from 'utils/validations';

import styles from './index-page-form.scss';

const isRequired = validations.isRequired;
const hasWhiteSpaces = validations.hasWhiteSpaces;
const isAlphaNumeric = validations.isAlphaNumeric;
const isLengthBetween = validations.isLengthBetween(0, 10);

const FORM_NAME = 'index-page-form';

class IndexPageForm extends Component {
    constructor(props) {
        super(props);

        this.onClickSubmit = this.onClickSubmit.bind(this);
    }

    onClickSubmit() {
        const {
            submit,
            valid,
        } = this.props;

        if (valid) {
            submit();
        }
    }

    render() {
        const {
            isFetching,
            handleSubmit,
            invalid,
        } = this.props;

        return (
            <Form
                onSubmit={ handleSubmit }
                className={ styles['index-page-form'] }
            >
                <Field
                    name='inputValue'
                    type='text'
                    placeholder='Enter something'
                    component={ TextInput }
                    validate={ [
                        isRequired,
                        hasWhiteSpaces,
                        isLengthBetween,
                        isAlphaNumeric,
                    ] }
                    disabled={ isFetching }
                />
                <Button
                    onClick={ this.onClickSubmit }
                    label='Get values'
                    disabled={ isFetching || invalid }
                />
            </Form>
        );
    }
}

export default reduxForm({
    form: FORM_NAME,
})(IndexPageForm);
