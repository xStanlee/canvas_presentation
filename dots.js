import {toRadian} from '/helpers.js';

const colors = ['lightgray', 'lightgray', 'lightgray', '#11AA7C'];

export function render(ctx, canvas) {

    ctx.fillStyle = 'gray';

    ctx.beginPath();

    ctx.moveTo(200, 100);
    ctx.lineTo(600, 100);
    ctx.lineTo(600, 300);
    ctx.lineTo(200, 300);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = colors[0];
    ctx.beginPath();
    ctx.moveTo(200, 100);
          //(point[x], point[y], radius, degrees to radians func, how do we draw clockwise or counter clockwise)
    ctx.arc(200, 100, 20, 0, toRadian(360), false);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = colors[1];
    ctx.beginPath();
    ctx.moveTo(200, 100);
    ctx.arc(600, 100, 20, 0, toRadian(360), false);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = colors[2];
    ctx.beginPath();
    ctx.moveTo(200, 100);
    ctx.arc(600, 300, 20, 0, toRadian(360), false);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = colors[3];
    ctx.beginPath();
    ctx.moveTo(200, 100);
    ctx.arc(200, 300, 20, 0, toRadian(360), false);
    ctx.closePath();
    ctx.fill();
}