import { storiesOf } from '@storybook/react';
import React from 'react';

import NewCounterComponent from '../03/NewCounterComponent';

storiesOf('NewCounter', module).add('기본 설정', () => <NewCounterComponent count={0} />);
