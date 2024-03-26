import React from "react";
import { storiesOf } from "@storybook/react";
import CustomBotton from "../04/CustomBotton"
import Text from "../04/Text"
import withLoading from "../05/withLoading";

const ButtonWithHoC = withLoading(CustomBotton);
const TextWithHoC = withLoading(Text);

storiesOf('WithHoC', module)
.addWithJSX('기본 설정', () => {
    return (
        <div>
            <ButtonWithHoC name='test'>test</ButtonWithHoC>
            <TextWithHoC name='test'>test</TextWithHoC>
        </div>
    );
})
.addWithJSX('large 예제', () => {
    return (
        <div>
            <ButtonWithHoC name='test' large>test</ButtonWithHoC>
            <TextWithHoC name='test' large>test</TextWithHoC>
        </div>
    );
})
.addWithJSX('isLoading 예제', () => {
    return (
        <div>
            <ButtonWithHoC name='test' isLoading>test</ButtonWithHoC>
            <TextWithHoC name='test' isLoading>test</TextWithHoC>
        </div>
    );
});