# Labs Website

## Images sizes

- **Article preview** : 620px (displayed on the homepage)
- **Article images** : 770px
- **Article cover** : 1400px (will be displayed if there is one, otherwise the preview picture will be used)

## Posts header

```
layout: post
title:
subtitle:
preview: uri
cover: uri <!-- facultatif: ne sera chargé en JS que si la taille est plus large --!>
type: project/prototype
color:
  r:
  g:
  b:
description:
```
```
layout: post
text: 
type: punchline
color:
  r:
  g:
  b:
```

## Addons used :

- [Masonry](https://masonry.desandro.com/)
- [TweenLite](https://greensock.com/docs/TweenLite)
- [Vimeo PlayerAPI](https://github.com/vimeo/player.js)
