import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import {Codemirror} from '../components/codeeditor/Codemirror';
import {Controlpanel} from '../components/controlpanel/Controlpanel';
import { VariablesInspector } from '../components/VariablesInspector/VariablesInspector';
import ObjectInspector from '../components/VariablesInspector/ObjectInspector';


import {muiTheme} from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';

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
//
//

const styles = {
  border: "1px solid"
};
const Bordered = (storyFn) => (
  <div style={styles} className="bordered">
    { storyFn() }
  </div>
);




var testCode = "class TestInfinity\n\tbelongs_to: :rohan\n\n\tdef testMethod\n\tend\nend\nclass Test\n\tbelongs_to: :rohan\n\n\tdef testMethod\n\tend\nend\nclass Test\n\tbelongs_to: :rohan\n\n\tdef testMethod\n\tend\nend\nclass Test\n\tbelongs_to: :rohan\n\n\tdef testMethod\n\tend\nend\nclass Test\n\tbelongs_to: :rohan\n\n\tdef testMethod\n\tend\nend\nclass Test\n\tbelongs_to: :rohan\n\n\tdef testMethod\n\tend\nend\nclass Test\n\tbelongs_to: :rohan\n\n\tdef testMethod\n\tend\nend\n";

storiesOf('CodeEditor', module)
  // .addDecorator(muiTheme())
  .addDecorator(Bordered)
  .addDecorator(withKnobs)
  .add('codemirror', () => <Codemirror 
                          code={testCode} 
                          completedLines={[25]} 
                          torunLines={[28]} 
                          activeLine={number("Active Line", 27)} 
                          lineClicked={action('lineGutterClicked')} 
                          symbolClicked={action('symbolClicked')} 
                          />);

storiesOf('ControlPanel', module)
  .addDecorator(Bordered)
  .addDecorator(muiTheme())
  .addDecorator(withKnobs)
  .add('panelWithButtons', () => <Controlpanel 
                          nextStatementClicked={action('nextStatement')} 
                          stepIntoClicked={action('stepInto')} 
                          prevStatementClicked={action('prevStatement')} 
                          />)

const testObjectData = {
  name: "Rohan Raja",
  age: 25,
  cities: ["Jaipur", "Kharagpur", "Hyderabad"],
  jobs: {
    "DDU" : "Web Developer",
    "BYU" : "Research Assistant"
  }
};

const testScopeVar = {
    "varName": "userInfo",
    "varType": "object",
    "varData": testObjectData
};

const testScopeVars = [
  testScopeVar
]

var testVarsData = {
  "local": {
    "i" : 4
  },
  "attributes": {
    "userInfo" : testObjectData
  },
  "global": {
  }

}

storiesOf('Variables Inspector', module)
  .addDecorator(Bordered)
  .addDecorator(muiTheme())
  .addDecorator(withKnobs)
  .add('Main Inspector', () => <VariablesInspector 
                              varsData = {testVarsData}
                          />)
  .add('Main Inspector - Var Change', () => <VariablesInspector 
                              varsData = {{"local": {i: number("iVal2" , 44)}}}
                          />)
  .add('Object Inspector', () => <ObjectInspector 
                              objectData = {testObjectData}
                          />)
