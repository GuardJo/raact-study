import { storiesOf } from "@storybook/react";
import React from "react";
import BranchButton from "../05/BranchButton";

storiesOf('Branch', module)
.addWithJSX('기본 설정', () => {
    return (
        <BranchButton>test</BranchButton>
    );
})
.addWithJSX('isLoading 예제', () => {
    return (
        <BranchButton isLoading>test</BranchButton>
    );
});