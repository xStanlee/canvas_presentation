const possition = document.querySelector('.possition');

export function watchPosition(element) {
    element.addEventListener('mousemove', e => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    possition.innerHTML = `X: ${x}, Y: ${y}`
});

};