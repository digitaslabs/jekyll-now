let animDuration = 0.5;
let shiftDelay = 0.3;
let iframe = document.getElementsByClassName('article-video')[0];
let closeEL = document.getElementsByClassName('close-video')[0];
let playEl = document.getElementsByClassName('play-video')[0];
let imageCropperEl = document.getElementsByClassName('image-cropper')[0];
let articleTitleEl = document.getElementsByClassName('article-title-text');
let style = imageCropperEl.currentStyle || window.getComputedStyle(imageCropperEl, false);
var backgroundUrl = style.backgroundImage.slice(4, -1);
// For IE we need to remove quotes to the proper url
backgroundUrl = style.backgroundImage.slice(4, -1).replace(/"/g, "");
var overlayEl = document.getElementsByClassName('cover-overlay')[0];
var player = new Vimeo.Player(iframe);

player.ready().then(function() {
  playEl.style.display = "block";
});

playEl.onclick = function onPlayClicked() {
  makePlayerAppear();
}

closeEL.onclick = function onPlayClicked() {
  makePlayerDisappear();
}

function makePlayerAppear() {
  playEl.style.display = "none";
  TweenLite.set(overlayEl, {right:"100%", left:"0%"});
  TweenLite.set(imageCropperEl , {paddingBottom:"35%"});

  TweenLite.to(overlayEl,animDuration/2, {right:"0%", onComplete:()=> {
    TweenLite.set(imageCropperEl, {backgroundImage:"none", backgroundColor:"black"});
    player.play();
    TweenLite.to(overlayEl,animDuration/2, {left:"100%", ease:Linear.easeOut}).delay(shiftDelay);
    TweenLite.to(articleTitleEl[0],animDuration/2, {top: "-5px"}).delay(shiftDelay);
    TweenLite.to(imageCropperEl ,animDuration/2, {paddingBottom:"55.75%", onComplete:()=> {
      TweenLite.set(iframe, {display:"block"});
      TweenLite.set(closeEL, {display:"block"});
      iframe.focus();
    }}).delay(animDuration/2+shiftDelay);
  }});
}

function makePlayerDisappear() {
  player.pause();
  TweenLite.set(closeEL, {display:"none"});
  TweenLite.to(overlayEl,animDuration/2, {left:"0%", ease:Linear.easeOut, onComplete:()=> {
    TweenLite.set(imageCropperEl, {backgroundImage:"url("+backgroundUrl+")"});
    TweenLite.set(iframe, {display:"none"});
    TweenLite.to(overlayEl,animDuration/2, {right:"100%", ease:Linear.easeOut}).delay(shiftDelay);
    TweenLite.to(articleTitleEl[0],animDuration/2, {top: "-40px"}).delay(shiftDelay);
    TweenLite.to(imageCropperEl ,animDuration/2, {paddingBottom:"35%", onComplete:()=> {
      playEl.style.display = "block";
    }}).delay(shiftDelay);
  }});
}
