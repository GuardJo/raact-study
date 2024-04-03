import { storiesOf } from "@storybook/react";
import React from "react";
import ReduxApp from "../07/ReduxApp";

storiesOf("Redux App", module)
.addWithJSX("기본 설정", () => {
    return(
        <ReduxApp></ReduxApp>
    );
});