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

// wall
const wallSlider = document.querySelector('#wall-slider');
let wallMouseDown = false;
let wallX, scrollLeftWall;

let startDraggingWall = function (e) {
  wallMouseDown = true;
  wallX = e.pageX - wallSlider.offsetLeft;
  scrollLeftWall = wallSlider.scrollLeft;
};

let stopDraggingWall = function (event) {
  wallMouseDown = false;
};

wallSlider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!wallMouseDown) { return; }
  const x = e.pageX - wallSlider.offsetLeft;
  const scroll = x - wallX;
  wallSlider.scrollLeft = scrollLeftWall - scroll;
});

// Add the event listeners
wallSlider.addEventListener('mousedown', startDraggingWall, false);
wallSlider.addEventListener('mouseup', stopDraggingWall, false);
wallSlider.addEventListener('mouseleave', stopDraggingWall, false);

// pvc
const pvcSlider = document.querySelector('#pvc-slider');
let pvcMouseDown = false;
let pvcX, scrollLeftPVC;

let startDraggingPVC = function (e) {
  pvcMouseDown = true;
  pvcX = e.pageX - pvcSlider.offsetLeft;
  scrollLeftPVC = pvcSlider.scrollLeft;
};

let stopDraggingPVC = function (event) {
  pvcMouseDown = false;
};

pvcSlider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!pvcMouseDown) { return; }
  const x = e.pageX - pvcSlider.offsetLeft;
  const scroll = x - pvcX;
  pvcSlider.scrollLeft = scrollLeftPVC - scroll;
});

// Add the event listeners
pvcSlider.addEventListener('mousedown', startDraggingPVC, false);
pvcSlider.addEventListener('mouseup', stopDraggingPVC, false);
pvcSlider.addEventListener('mouseleave', stopDraggingPVC, false);

// vent
const ventSlider = document.querySelector('#vent-slider');
let ventMouseDown = false;
let ventX, scrollLeftVent;

let startDragginVent = function (e) {
  ventMouseDown = true;
  ventX = e.pageX - ventSlider.offsetLeft;
  scrollLeftVent = ventSlider.scrollLeft;
};

let stopDraggingVent = function (event) {
  ventMouseDown = false;
};

ventSlider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!ventMouseDown) { return; }
  const x = e.pageX - ventSlider.offsetLeft;
  const scroll = x - ventX;
  ventSlider.scrollLeft = scrollLeftVent - scroll;
});

// Add the event listeners
ventSlider.addEventListener('mousedown', startDragginVent, false);
ventSlider.addEventListener('mouseup', stopDraggingVent, false);
ventSlider.addEventListener('mouseleave', stopDraggingVent, false);




//Sheet Metal
const metalSlider = document.querySelector('#metal-slider');
let metalMouseDown = false;
let metalX, scrollLeftMetal;

let startDraggingUniverse = function (e) {
  metalMouseDown = true;
  metalX = e.pageX - metalSlider.offsetLeft;
  scrollLeftMetal = metalSlider.scrollLeft;
};

let stopDraggingUniverse = function (event) {
  metalMouseDown = false;
};

metalSlider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!metalMouseDown) { return; }
  const x = e.pageX - metalSlider.offsetLeft;
  const scroll = x - metalX;
  metalSlider.scrollLeft = scrollLeftMetal - scroll;
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
