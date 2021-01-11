export function render(ctx, canvas) {
    ctx.beginPath();

    ctx.moveTo(200, 100);
    ctx.lineTo(600, 100);
    ctx.lineTo(600, 300);
    ctx.lineTo(200, 300);

    ctx.closePath();
    ctx.fill();
}