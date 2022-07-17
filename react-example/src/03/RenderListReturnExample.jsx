import React, { PureComponent } from 'react';

class RenderListReturnExample extends PureComponent {
    render() {
        return [1, 2, 3].map((num) => (
            <input
                type="radio"
                name="option1"
                key={`${num}`}
                value={num}
                label={`${num}개`}
            ></input>
        ));
    }
}

export default RenderListReturnExample;
