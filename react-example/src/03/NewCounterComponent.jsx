import React, { Component } from 'react';

class NewCounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.increaseCount = this.increaseCount.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        const { count } = props;
        return {
            // 프로퍼티에서 전달된 count 값 보관
            count,
            newCount: count === state.count ? state.newCount : count,
            // 프로퍼티가 변경되지 않았으면 기존 state값, 변경되었으면 변경된 프로퍼티 값 적용
        };
    }

    increaseCount() {
        this.setState(({ newCount }) => ({
            newCount: newCount + 1,
        }));
    }

    render() {
        return (
            <div>
                현재 카운트 : {this.state.newCount}
                <button onClick={this.increaseCount}>카운트 증가</button>
            </div>
        );
    }
}

export default NewCounterComponent;
