# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![laptop View](./images/laptop%20viewScreenshot%202023-12-13%20094307.png)

Laptop View of Ip Address tracker

![laptop View](./images/mobile%20view%20Screenshot%202023-12-13%20094445.png)

Mobile View of Ip Address tracker

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JS
- Mobile-first workflow
- [Ipify](https://www.ipify.org/) - Ipify for Ip geolocation API
- [Leaflet](https://leafletjs.com/) - Leaflet to generate map design and style the marker


### What I learned

Learnt on how to use fetch and how it is related to promise

```js
fetch(ip_url)
    .then(response => response.json())
    .then(data => {
        current_ip.innerHTML = data.ip
        current_location.innerHTML = `${data.location.city}, ${data.location.country} ${data.location.postalCode}`;
        current_zone.innerHTML = data.location.timezone;
        current_isp.innerHTML = data.isp;

        updateMarker([data.location.lat, data.location.lng]);
    })
    .catch(error => console.log("Oops!! Something went wrong"))
```

## Author

- Website - [Julie](https://ip-address-tracker-j.netlify.app/)
- Frontend Mentor - [@Jey223](https://www.frontendmentor.io/profile/Jey223)
- Twitter - [@Juliewice3](https://www.twitter.com/Juliewice3)
