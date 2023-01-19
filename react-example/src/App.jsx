import React, { Component } from 'react';
import InputWithStyle from './04/InputWithStyle';
import './App.css';
import './sass/materialize.scss';

class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div>
                        <div className="nav-wrapper">Hello React!</div>
                    </div>
                </nav>
                <h1>머터리얼 CSS</h1>
                <InputWithStyle name="test" label="test"></InputWithStyle>
            </div>
        );
    }
}

export default App;
