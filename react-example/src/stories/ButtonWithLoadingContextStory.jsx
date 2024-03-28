import { storiesOf } from "@storybook/react";
import React from "react";
import ButtonWithLoadingContext from "../06/ButtonWithLoadingContext";
import HomePageComponent from "../06/HomePageComponent";
import HomePageComponentWithKey from "../06/HomePageComponentWithKey";

storiesOf('ButtonWithLoadingContext', module)
.addWithJSX('기본 설정', () => {
    return <ButtonWithLoadingContext label='test'></ButtonWithLoadingContext>
})
.addWithJSX('Loading Provider 예제', () => {
    return <HomePageComponent>test</HomePageComponent>
})
.addWithJSX('Loading Provider with Key 예제', () => {
    return <HomePageComponentWithKey>test</HomePageComponentWithKey>
})