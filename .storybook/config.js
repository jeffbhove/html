import { configure } from '@storybook/html';
import './css/style.css';
import './css/variables.css';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
