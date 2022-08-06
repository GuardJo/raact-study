import { storiesOf } from '@storybook/react';
import React from 'react';
import BooleanComponent from '../03/BooleanComponent';

storiesOf('BooleanComponent', module)
    .add('기본 설정', () => <BooleanComponent />)
    .add('bored 설정', () => <BooleanComponent bored />);
