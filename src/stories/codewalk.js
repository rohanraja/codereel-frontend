import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import Helloworld from '../components/Helloworld';
import ConnectedCodemirror from '../components/codeeditor/Codemirror';
import ConnectedControlpanel from '../components/controlpanel/Controlpanel';


import Provider from './Provider';
import WithStore from '../store/WithStore';

import {muiTheme} from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';




const styles = {
  border: "1px solid"
};
const Bordered = (storyFn) => (
  <div style={styles} className="bordered">
    { storyFn() }
  </div>
);

storiesOf('Code Line Incrementor', module)
  .addDecorator(Bordered)
  .addDecorator(muiTheme())
  .addDecorator(withKnobs)
  .addDecorator(story => <Provider story={story()} />)
  .add('withRedux', () => 
    <div>
    <ConnectedControlpanel />
    <ConnectedCodemirror />
    </div>
  )
