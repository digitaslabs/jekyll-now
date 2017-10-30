let changed = false;
changeImage();
window.onresize = changeImage;

function changeImage() {
  if(changed) {
    return;
  }
  let coverEl = document.getElementsByClassName('image-cropper')[0];
  if(coverEl.offsetWidth > 620) {
    let coverPath = document.getElementById('cover-path').innerHTML;
    coverEl.style.backgroundImage = "url("+coverPath+")";
    console.log("changed image");
    changed = true;
  }
}
