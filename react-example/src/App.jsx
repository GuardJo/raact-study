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
import StateExample from './03/StateExample';
import ForceUpdateExample from './03/ForceUpdateExample';
import ClickCountComponent from './03/ClickCountComponent';
import LifecycleExample from './03/LifecycleExample';
import CounterComponent from './03/CounterComponent';
import NewCounterComponent from './03/NewCounterComponent';
import TodaysPlanApp from './03/TodaysPlanApp';
import SFCTodayPlanApp from './03/SFCTodayPlanApp';
import ListExample from './03/ListExample';
import TodoList from './03/TodoList';
import RenderListReturnExample from './03/RenderListReturnExample';
import CounterApp from './03/CounterApp';
import ScrollSpy from './03/ScrollSpy';
import Counter3 from './03/Counter3';
import Input from './03/Input';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10,
            hasDestroyed: false,
        };
        this.resetCount = this.resetCount.bind(this);
    }

    resetCount() {
        this.setState(({ count }) => ({
            count: count + 10,
        }));
    }

    componentDidMount() {
        this.setState({ hasDestroyed: true });
    }

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
                <StateExample />
                <ForceUpdateExample />
                <ClickCountComponent />
                <div>{this.state.hasDestroyed ? null : <LifecycleExample />}</div>
                <div>
                    <CounterComponent count={this.state.count} />
                </div>
                <div>
                    <NewCounterComponent count={this.state.count} />
                </div>
                <button onClick={this.resetCount}>{this.state.count + 10}으로 초기화</button>
                <TodaysPlanApp />
                <SFCTodayPlanApp />
                <ListExample />
                <TodoList />
                <RenderListReturnExample />
                <CounterApp />
                <ScrollSpy />
                <Counter3 />
                <Input errorMessage="error" label="label test" name="kyeongho" type="text" />
            </div>
        );
    }
}

export default App;
