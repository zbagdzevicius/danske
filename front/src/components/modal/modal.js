import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from 'components/button/button';

import modalActions from './redux/actions';

import styles from './modal.scss';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.modalRoot = document.getElementById('modal-root');
        this.modalElement = document.createElement('div');
    }

    componentDidMount() {
        this.modalRoot.appendChild(this.modalElement);
    }

    componentWillUnmount() {
        this.modalRoot.removeChild(this.modalElement);
    }

    renderValues(values) {
        return Object.keys(values).map((value) => (
            <div key={ value }>
                { `${value} - ${values[value]}` }
            </div>
        ));
    }

    renderResults(values) {
        const results = values.val3 * values.val5;
        const resultsMessage = `val3 * val5 = ${results}`;

        return (
            <div className={ styles['results'] }>
                { resultsMessage }
            </div>
        );
    }

    renderModal() {
        const {
            actions,
            modal,
        } = this.props;

        return modal.modalOpen && (
            <div className={ styles['modal'] }>
                <div className={ styles['content-wrapper'] }>
                    <div className={ styles['content'] }>
                        { this.renderValues(modal.modalProps.values) }
                        { this.renderResults(modal.modalProps.values) }
                    </div>
                    <div className={ styles['footer'] }>
                        <Button
                            onClick={ actions.modal.close }
                            label='Close'
                        />
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return ReactDOM.createPortal(
            this.renderModal(),
            this.modalElement,
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.modal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            modal: bindActionCreators(modalActions, dispatch),
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
