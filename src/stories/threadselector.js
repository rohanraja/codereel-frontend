import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {muiTheme} from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';

import Provider from './Provider';

import { Threadselector } from '../components/Threadselector' ;
// -- import_hook --



const styles = {
  border: "1px solid"
};
const Bordered = (storyFn) => (
  <div style={styles} className="bordered">
    { storyFn() }
  </div>
);

const threads = [
  ["Thread_1", 2],
  ["Thread_2", 4],
  ["Thread_3", 6],
]

storiesOf('Threadselector', module)
  .addDecorator(Bordered)
  .addDecorator(muiTheme())
  .addDecorator(withKnobs)
  .addDecorator(story => <Provider story={story()} />)
  .add('with_props', () => 
    <Threadselector
            threadInfos = {threads}
            activeThreadRunId={number("Active Thread", 4)} 
            threadButtonClicked={action('OnThreadButtonClick')} 
    />
  )
