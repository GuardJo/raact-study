import React from 'react';
import { storiesOf } from '@storybook/react';
import ReduxSearchComponent from '../07/ReduxSearchComponent';

storiesOf('Redux 검색 컴포넌트', module).addWithJSX('기본', () => {
    return <ReduxSearchComponent></ReduxSearchComponent>;
});
