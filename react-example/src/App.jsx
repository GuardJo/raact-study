import React, { Component } from 'react';
import './App.css';
import TodaysPlan from './03/TodaysPlan';
import MyComponent from './03/MyComponent';
import PropsComponent from './03/PropsComponent';
import ChildComponent from './03/ChildComponent';
import BooleanComponent from './03/BooleanComponent';
import ChildComponent2 from './03/ChildComponent2';
import DefaultPropsComponent from './03/DefaultPropsComponent';
import ChildProperty from './03/ChildProperty';

class App extends Component {
    render() {
        const array = [1, 2, 3];
        const obj = { name: 'title', age: 30 };
        const node = <h1>node</h1>;
        const func = () => {
            console.log('message');
        };
        return (
            <div className="body">
                <TodaysPlan />
                <MyComponent name="property test" />
                <PropsComponent name="hello react" />
                <ChildComponent
                    boolValue={true}
                    numValue={1}
                    arrayValue={array}
                    objValue={obj}
                    nodeValue={node}
                    funcValue={func}
                />
                <BooleanComponent bored />
                <BooleanComponent />
                <ChildComponent2 objValue={obj} requiredStringValue="필수 문자열" />
                <DefaultPropsComponent />
                <ChildProperty>
                    <div>
                        <span>chidren node</span>
                    </div>
                </ChildProperty>
            </div>
        );
    }
}

export default App;
