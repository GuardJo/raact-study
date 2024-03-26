import React from "react";
import withState from "recompose/withState";
import CustomBotton from "../04/CustomBotton";

export const withCountState = withState('count', 'setCount', 0);

function Counter({count, setCount}) {
    const increaseCount = () => setCount(c => c + 1);

    return (
        <div>
            현재 카운트 : {count}
            <CustomBotton onPress={increaseCount}>Count</CustomBotton>
        </div>
    );
};

export const StateCounter = withCountState(Counter);