import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import Helloworld from '../components/Helloworld';
import ConnectedCodemirror from '../components/codeeditor/Codemirror';
import ConnectedControlpanel from '../components/controlpanel/Controlpanel';
import ConnectedCodeHeader from '../components/Code_header';
import VariablesInspector from '../components/VariablesInspector/VariablesInspector';


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
  .add('withInspector', () => 
    <div>
      <ConnectedControlpanel />
      <ConnectedCodeHeader style={{"display": "flex", justifyContent: "space-between"}} />
      <div >
        <ConnectedCodemirror style={{width: "500px"}} />
        <VariablesInspector style={{flexBasis: "1 | auto"}} />
      </div>
    </div>
  )
  .add('withRedux', () => 
    <div>
    <ConnectedControlpanel />
    <ConnectedCodeHeader />
    <ConnectedCodemirror />
    </div>
  )
