//import {watchPosition} from './mouse.js';

//import {render} from './shape.js';
//import {render} from './dots.js';
//import {render} from './animated.js';
//import {render} from './images.js';

document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.querySelector('canvas');

    watchPosition(canvas);

    const ctx = canvas.getContext('2d');
    render(ctx, canvas);
})