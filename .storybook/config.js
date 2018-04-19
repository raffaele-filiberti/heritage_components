import { configure } from '@storybook/react';
// import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);

// const newViewports = {
//     kindleFire2: {
//         name: 'Kindle Fire 2',
//         styles: {
//             width: '600px',
//             height: '963px'
//         }
//     },
//     kindleFireHD: {
//         name: 'Kindle Fire HD',
//         styles: {
//             width: '533px',
//             height: '801px'
//         }
//     }
// };
//
// configureViewport({
//     viewports: {
//         ...INITIAL_VIEWPORTS,
//         ...newViewports
//     }
// });