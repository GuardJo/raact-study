import { storiesOf } from "@storybook/react";
import React from "react";
import { LifecycleLoadPage } from "../05/LifecycleComponent";

storiesOf('LifecycleLoadComponent', module)
.addWithJSX('기본 설정', () => {
    return (
        <LifecycleLoadPage>test</LifecycleLoadPage>
    );
});