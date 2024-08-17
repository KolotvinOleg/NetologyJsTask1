const count = document.getElementById('clicker__counter');
const image = document.getElementById('cookie');
const speed = document.getElementById('clicker__speed');

let widthMax = false;

start = new Date().getTime();

image.onclick = () => {
    if (widthMax === false) {
        image.width *= 1.5;
        widthMax = true;
    } else {
        image.width /= 1.5;
        widthMax = false;
    }
    end = new Date().getTime();
    count.textContent = Number(count.textContent) + 1;
    speed.textContent = (1000/(end - start)).toFixed(2);
    start = end;
}
