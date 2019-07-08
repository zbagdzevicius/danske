import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import fubarActions from 'redux/actions';
import Loader from 'components/loader/loader';

import IndexPageForm from './form/index-page-form';

import styles from './index-page.scss';

class IndexPage extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit({ inputValue }) {
        const {
            actions,
        } = this.props;

        actions.getValues(inputValue);
    }

    render() {
        const {
            isFetching,
        } = this.props;

        return (
            <React.Fragment>
                { isFetching && (
                    <Loader />
                ) }
                <div className={ styles['container'] }>
                    <div className={ styles['title'] }>
                        Get some values!
                    </div>
                    <IndexPageForm
                        onSubmit={ this.handleSubmit }
                        isFetching={ isFetching }
                    />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.page.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(fubarActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
