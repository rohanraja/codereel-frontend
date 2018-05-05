import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/stories/codewalk.js');
}

configure(loadStories, module);
