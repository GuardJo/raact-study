import React from 'react';
import TodaysPlan from './TodaysPlan';

function SFCTodayPlanApp(props) {
    const { onButtonClick, hasPlan } = props;
    return (
        <div className="body">
            {hasPlan ? <TodaysPlan /> : null}
            <button onClick={onButtonClick}>ęłíěě</button>
        </div>
    );
}

export default SFCTodayPlanApp;
