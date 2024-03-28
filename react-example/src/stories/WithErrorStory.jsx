import React from "react";
import { storiesOf } from "@storybook/react";
import withError from "../05/withError";
import InputWithStyle from "../04/InputWithStyle";

const InputWithError = withError('This is Error')(InputWithStyle);

storiesOf('withError', module)
.addWithJSX('InputWithError 예제', () => {
    return (
        <InputWithError name='test' label='test'>test</InputWithError>
    );
})
.addWithJSX('InputWithError hasError 예제', () => {
    return (
        <InputWithError name='test' label='test' hasError>test</InputWithError>
    );
});