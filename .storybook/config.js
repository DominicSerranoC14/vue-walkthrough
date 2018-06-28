import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function loadStories() {
  require('../stories')
}

configure(loadStories, module)
