// const nameslide = document.querySelector('#untitled-slider');
// let mouseDown = false;
// let startX, scrollLeft;

// let startDragging = function (e) {
//   mouseDown = true;
//   startX = e.pageX - nameslide.offsetLeft;
//   scrollLeft = nameslide.scrollLeft;
// };

// let stopDragging = function (event) {
//   mouseDown = false;
// };

// nameslide.addEventListener('mousemove', (e) => {
//   e.preventDefault();
//   if(!mouseDown) { return; }
//   const x = e.pageX - nameslide.offsetLeft;
//   const scroll = x - startX;
//   nameslide.scrollLeft = scrollLeft - scroll;
// });

// // Add the event listeners
// nameslide.addEventListener('mousedown', startDragging, false);
// nameslide.addEventListener('mouseup', stopDragging, false);
// nameslide.addEventListener('mouseleave', stopDragging, false);

// pvc
const pvcSlider = document.querySelector('#pvc-slider');
let pvcMouseDown = false;
let pvcX, scrollLeftUntitled;

let startDraggingUntitled = function (e) {
  pvcMouseDown = true;
  pvcX = e.pageX - pvcSlider.offsetLeft;
  scrollLeftUntitled = pvcSlider.scrollLeft;
};

let stopDraggingUntitled = function (event) {
  pvcMouseDown = false;
};

pvcSlider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!pvcMouseDown) { return; }
  const x = e.pageX - pvcSlider.offsetLeft;
  const scroll = x - pvcX;
  pvcSlider.scrollLeft = scrollLeftUntitled - scroll;
});

// Add the event listeners
pvcSlider.addEventListener('mousedown', startDraggingUntitled, false);
pvcSlider.addEventListener('mouseup', stopDraggingUntitled, false);
pvcSlider.addEventListener('mouseleave', stopDraggingUntitled, false);

// vent
const ventSlider = document.querySelector('#vent-slider');
let ventMouseDown = false;
let ventX, scrollLeftUntitled;

let startDraggingUntitled = function (e) {
  ventMouseDown = true;
  ventX = e.pageX - ventSlider.offsetLeft;
  scrollLeftUntitled = ventSlider.scrollLeft;
};

let stopDraggingUntitled = function (event) {
  ventMouseDown = false;
};

ventSlider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!ventMouseDown) { return; }
  const x = e.pageX - ventSlider.offsetLeft;
  const scroll = x - ventX;
  ventSlider.scrollLeft = scrollLeftUntitled - scroll;
});

// Add the event listeners
ventSlider.addEventListener('mousedown', startDraggingUntitled, false);
ventSlider.addEventListener('mouseup', stopDraggingUntitled, false);
ventSlider.addEventListener('mouseleave', stopDraggingUntitled, false);




//Sheet Metal
const metalSlider = document.querySelector('#metal-slider');
let metalMouseDown = false;
let metalX, scrollLeftUniverse;

let startDraggingUniverse = function (e) {
  metalMouseDown = true;
  metalX = e.pageX - metalSlider.offsetLeft;
  scrollLeftUniverse = metalSlider.scrollLeft;
};

let stopDraggingUniverse = function (event) {
  metalMouseDown = false;
};

metalSlider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!metalMouseDown) { return; }
  const x = e.pageX - metalSlider.offsetLeft;
  const scroll = x - metalX;
  metalSlider.scrollLeft = scrollLeftUniverse - scroll;
});

// Add the event listeners
metalSlider.addEventListener('mousedown', startDraggingUniverse, false);
metalSlider.addEventListener('mouseup', stopDraggingUniverse, false);
metalSlider.addEventListener('mouseleave', stopDraggingUniverse, false);



const stepSlider = document.querySelector('#step-slider');
let stepMouseDown = false;
let stepX, scrollLeft;

let startDragging = function (e) {
  stepMouseDown = true;
  stepX = e.pageX - stepSlider.offsetLeft;
  scrollLeft = stepSlider.scrollLeft;
};

let stopDragging = function (event) {
  stepMouseDown = false;
};

stepSlider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!stepMouseDown) { return; }
  const x = e.pageX - stepSlider.offsetLeft;
  const scroll = x - stepX;
  stepSlider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
stepSlider.addEventListener('mousedown', startDragging, false);
stepSlider.addEventListener('mouseup', stopDragging, false);
stepSlider.addEventListener('mouseleave', stopDragging, false);
