import React from 'react';
import { storiesOf } from '@storybook/react';

import InputWithStyle from '../04/InputWithStyle';

storiesOf('InputWithStyle', module)
    .addWithJSX('기본 설정', () => <InputWithStyle name="테스터" type="email" />)
    .addWithJSX('label 예제', () => <InputWithStyle name="test" label="testLabel" type="email" />)
    .addWithJSX('value 예제', () => (
        <InputWithStyle name="tester" label="test label" value="값" type="email" />
    ))
    .addWithJSX('error message 예제', () => (
        <InputWithStyle name="tester" label="label" errorMessage="Error!!" />
    ));
