let Eye = document.getElementsByClassName('eye');
let arr = Array.from(Eye);

let eyeStartPoint = -100;
let eyeRange = 200;

let XstartPoint = 0;
let XendPoint = window.innerWidth;
let currentXPoint = 0;
let Xvalue = 0;

let YendPoint = window.innerHeight;
let currentYPoint = 0;
let Yvalue = 0;

let mouseXrange = XendPoint - XstartPoint;

window.addEventListener('mousemove', (event) => {
    currentXPoint = event.clientX - XstartPoint;
    Xvalue = currentXPoint / mouseXrange;

    currentYPoint = event.clientY;
    Yvalue = currentYPoint / YendPoint;

    let eyesXCurrentPosition = eyeStartPoint + (Xvalue * eyeRange);
    let eyesYCurrentPosition = eyeStartPoint + (Yvalue * eyeRange);

    arr.forEach((currentPoint) => {
        currentPoint.style.transform = `translate(${eyesXCurrentPosition}px, ${eyesYCurrentPosition}px)`;
    });
});