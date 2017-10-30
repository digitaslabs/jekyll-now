if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && path) {
  let coverEl = document.getElementsByClassName('image-cropper')[0];
  coverEl.style.backgroundImage = "url("+preview+")";
  let avatar = document.getElementsByClassName('site-avatar')[0];
  avatar.style.display = "none"; 
}
