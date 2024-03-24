import { storiesOf } from '@storybook/react';
import React from 'react';
import CustomBotton from '../04/CustomBotton';

storiesOf('CustomButton', module)
    .addWithJSX('기본 설정', () => <CustomBotton>Test</CustomBotton>)
    .addWithJSX('large 예제', () => <CustomBotton large>Test</CustomBotton>)
    .addWithJSX('xlarge 예제', () => <CustomBotton xlarge>Test</CustomBotton>)
    .addWithJSX('small 예제', () => <CustomBotton small>Test</CustomBotton>)
    .addWithJSX('xsmall 예제', () => <CustomBotton xsmall>Test</CustomBotton>)
    .addWithJSX('primary 예제', () => <CustomBotton primary>Test</CustomBotton>)
    .addWithJSX('secondary 예제', () => <CustomBotton secondary>Test</CustomBotton>)
    .addWithJSX('primary and large 예제', () => (
        <CustomBotton primary large>
            Test
        </CustomBotton>
    ));
