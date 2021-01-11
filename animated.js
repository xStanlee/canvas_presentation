import {toRadian} from './helpers.js';
import {changeValue} from './transform.js';

let colors = [
    ['#586F7C', '#586F7C', '#586F7C', '#FF5964'],
    ['#FF5964', '#586F7C', '#586F7C', '#586F7C'],
    ['#586F7C', '#FF5964', '#586F7C', '#586F7C'],
    ['#586F7C', '#586F7C', '#FF5964', '#586F7C'],
]

let count = 0;
let counter = 0;
let t = -1;

function blinkForIndex(index) {
    return counter === index ? '#11AA7C' : 'lightgrey';
}

function renderShape(ctx) {

    window.requestAnimationFrame(() => { renderShape(ctx); });

    count += 0.05;
    counter = Math.floor(count) % 4;

    t = changeValue(t);

    const x1 = 200 - t;
    const y1 = 150 + t;

    const x2 = 600 + t;
    const y2 = 150 + t;

    const x3 = 600 - t;
    const y3 = 250 + t;

    const x4 = 200 + t;
    const y4 = 250 + t;

    ctx.clearRect(0, 0, 800, 400);

    ctx.fillStyle = 'grey';

    ctx.beginPath();

    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);

    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = blinkForIndex(0);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.arc(x1, y1, 20, 0, toRadian(360), false);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = blinkForIndex(1);
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.arc(x2, y2, 20, 0, toRadian(360), false);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = blinkForIndex(2);
    ctx.beginPath();
    ctx.moveTo(x3, y3);
    ctx.arc(x3, y3, 20, 0, toRadian(360), false);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = blinkForIndex(3);
    ctx.beginPath();
    ctx.moveTo(x4, y4);
    ctx.arc(x4, y4, 20, 0, toRadian(360), false);
    ctx.closePath();
    ctx.fill();

    ctx.closePath();
    ctx.fill();
}

export function render(ctx, canvas) {
    renderShape(ctx);
}