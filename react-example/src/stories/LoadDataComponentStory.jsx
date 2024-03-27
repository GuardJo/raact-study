import { storiesOf } from "@storybook/react";
import React from "react";
import { LoadDataComponent } from "../05/LoadDataComponent";

storiesOf('LoadDataComponent', module)
.addWithJSX('기본 설정', () => {
    return (
        <LoadDataComponent>test</LoadDataComponent>
    );
})
.addWithJSX('isLoading 예시', () => {
    return (
        <LoadDataComponent isLoading>test</LoadDataComponent>
    );
});