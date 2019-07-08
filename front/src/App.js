import React, { Component } from 'react';

import { IndexPage } from 'pages/';
import Modal from 'components/modal/modal';

import styles from './App.scss';

class App extends Component {
    render() {
        return (
            <div className={ styles['root'] }>
                <Modal />
                <IndexPage />
            </div>
        );
    }
}

export default App;
