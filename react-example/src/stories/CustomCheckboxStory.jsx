import React from "react";
import { storiesOf } from "@storybook/react";
import CustomCheckBox from "../04/CustomCheckBox";
import Text from "../04/Text";
import { action } from "@storybook/addon-actions";

storiesOf('CustomCheckBox', module)
.addWithJSX('기본 설정', () => <CustomCheckBox name="test"></CustomCheckBox>)
.addWithJSX('하위 컴포넌트 추가', () => {
    return(
    <CustomCheckBox name="agree">
        <Text>test</Text>
    </CustomCheckBox>
    );
})
.addWithJSX('label 예제', () => {
    return (
    <CustomCheckBox name="test" label='test'>
        <Text>test</Text>
    </CustomCheckBox>
    );
})
.addWithJSX('onChnage 이벤트 예제', () => {
    return (
    <CustomCheckBox name="test" label='test' onChange={action('Execute onChange Event')}>
        <Text>test</Text>
    </CustomCheckBox>
    );
})
.addWithJSX('errorMessage 예제', () => {
    return (
        <CustomCheckBox name="test" label='test' errorMessage='error입니다.'>
            <Text>test</Text>
        </CustomCheckBox>
    );
})