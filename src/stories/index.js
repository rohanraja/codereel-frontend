import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Helloworld from '../components/Helloworld';
import Codemirror from '../components/codeeditor/Codemirror';
import Materialsearch from '../components/Materialsearch';

import {muiTheme} from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import centered from '@storybook/addon-centered';


//
// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
//
// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button </Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
//
//   


storiesOf('HelloWorld', module)
  .addDecorator(muiTheme())
  .addDecorator(withKnobs)
  .add('material_ui_test', () => <Helloworld contnt={text("Button Text", "TRY ME")} />)
  .add('search', () => <Materialsearch />);

storiesOf('CodeMirror', module)
  // .addDecorator(muiTheme())
  .addDecorator(withKnobs)
  .add('Editor1', () => <Codemirror activeLine={number("Active Line", 30)} />)
