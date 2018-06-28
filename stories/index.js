import { storiesOf } from '@storybook/vue';
// import { linkTo } from '@storybook/addon-links';

import Hello from '../src/components/HelloWorld.vue';

storiesOf('Hello', module).add('Hello Component', () => ({
  components: { Hello },
  template: `<hello :msg="'Hello'" />`,
}));
