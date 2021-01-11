function putImage(event, image, canvas, ctx) {
    const clientRect = canvas.getBoundingClientRect(); // Spot of canvas document viewport

    const imgX = parseInt(event.clientX -clientRect.left) - 100;
    const imgY = parseInt(event.clientY -clientRect.top) - 100;

    ctx.drawImage(image, imgX, imgY);
}

export function render(ctx, canvas) {

    let isLoaded = false;

    const img = new Image(80, 80);
    img.src = 'https://freepngimg.com/thumb/cartoon/63955-stitch-sticker-face-disney\'s-pelekai-lilo-thumb.png';

    img.onload = function () {
        isLoaded = true;
    }

    canvas.addEventListener('click', e => {
        console.log(isLoaded);
        console.log(img);
        if (isLoaded) {
            putImage(e, img, canvas, ctx);
        }
    })
}