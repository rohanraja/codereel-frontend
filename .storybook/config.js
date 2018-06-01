import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/stories/codewalk.js');
  require('../src/stories/code_header.js');
  require('../src/stories/threadselector.js');
  // -- require_hook --
}

configure(loadStories, module);
