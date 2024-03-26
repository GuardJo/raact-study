import { storiesOf } from "@storybook/react";
import React from "react";
import { StateCounter } from "../05/StateConter";

storiesOf('State Counter', module)
.addWithJSX('기본 설정', () => {
    return (
        <StateCounter>test</StateCounter>
    );
});