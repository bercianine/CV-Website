function RotateOn() {
  const emojiRotate = document.getElementById("emojiWave")
  emojiRotate.style.transform = `rotate(15deg)`
}

function RotateOff() {
  const emojiRotate = document.getElementById("emojiWave")
  emojiRotate.style.transform = `rotate(0deg)`
}

function SlideOn() {
  const emojiSlide = document.getElementById("emojiWork")
  emojiSlide.style.transform = `translate(0px, -6px)`
  setTimeout(SlideOff, 240);
}

function SlideOff() {
  const emojiSlide = document.getElementById("emojiWork")
  emojiSlide.style.transform = `translate(0px, 0px)`
}