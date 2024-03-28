import { storiesOf } from "@storybook/react";
import React from "react";
import { LifecycleLoadPage } from "../05/LifecycleComponent";

storiesOf('LifecycleLoadComponent', module)
.addWithJSX('loadData 예제', () => {
    return (
        <LifecycleLoadPage loadData={() => fetch('/').then(() => 'hello')}></LifecycleLoadPage>
    );
});