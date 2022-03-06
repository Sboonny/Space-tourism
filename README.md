# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size ✔
- See hover states for all interactive elements on the page ✔
- View each page and be able to toggle between the tabs to see new information ✔

---

### Screenshot

![](.\assets\space-tourism-desktop\home-desktop.jpeg)


### Links

- Solution URL: [github/space-tourism](https://github.com/Sboonny/Space-tourism)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

---

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JS

---

### What I learned

I learned about **Utility classes** and how to useful they are

you can change a value using style in html

```html
<div class="box" styles="--gap: 5rem;"></div>
```

I learnd about hr to create a line between content

```html
<hr />
```

i learn that hr doesn't use background or color for it's style but border

```css
hr {
  border: 1px solid white;
}
```

pick a parent whatever its, instead of query. this way makes it possible to use the code, without it having a main as parent

```js
const tabContainer = targetedTab.parentNode;
const mainContainer = tabContainer.parentNode;
```

Changing image src depending on screen size

```html
<picture>
  <source media="(min-width: 900px)" srcset="BigImage.png" />
  <source media="(min-width: 480px)" srcset="MediumImage.png" />
  <img src="OtherImage.png" alt="IfItDoesntMatchAnyMedia" />
</picture>
```

**the importance of commiting regularly**

---

### Continued development

**creating technology-page**
creating my own reset and snipit changing button color to gradient and remove the white color to make it easier for the eye

---

### Useful resources

- [Design system by kevin powell](https://www.youtube.com/watch?v=lRaL-8qZ0mM&t=17154s) - This helped me with my imposter syndrom and proved that i can do most of the challenges

---

## Author

- TBD - [Muhammed Mustafa](https://www.your-site.com)
- Frontend Mentor - [@Sboonny](https://www.frontendmentor.io/profile/Sboonny)

---

## Acknowledgments

I would love to acknowledge because I wouldn't have tried to beat imposter syndrom without them:

- [Kevin Powell](https://www.kevinpowell.co/)
- [FreeCodeCamp](https://www.freecodecamp.org/)
