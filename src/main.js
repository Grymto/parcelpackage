const img = document.createElement("img");
document.body.append(img);
img.scr = './Media/nedladdning.png';


const imgUrl = new URL('./Media/nedladdning.png', import.meta.url);

img.src = imgUrl.href;

console.log(imgUrl);