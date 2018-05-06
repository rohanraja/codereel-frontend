import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import Helloworld from '../components/Helloworld';
import Codemirror from '../components/codeeditor/Codemirror';
import Controlpanel from '../components/controlpanel/Controlpanel';
import {nextCalled, prevCalled} from '../store/CodeControlPanel/actions';


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
                
    <WithStore>
    {(state, dispatch) => 

      <div>

      <Controlpanel 
        nextStatementClicked={() => dispatch(nextCalled())} 
        prevStatementClicked={() => dispatch(prevCalled())} 
      
      />

    <Codemirror code={state.code} activeLine={state.activeLineNo} />

      </div>
    }
    </WithStore>
  )
