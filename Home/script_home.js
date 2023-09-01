function RotateOn() {
  const emojiRotate = document.getElementById("emojiWave")
  emojiRotate.style.transform = `rotate(15deg)`
  setTimeout(RotateOff, 320);
}

function RotateOff() {
  const emojiRotate = document.getElementById("emojiWave")
  emojiRotate.style.transform = `rotate(0deg)`
}

setInterval(RotateOn, 3000);

function JumpUp() {
  const emojiJump = document.getElementById("emojiWork")
  emojiJump.style.transform = `translate(0px, -6px)`
  setTimeout(JumpDown, 240);
}

function JumpDown() {
  const emojiJump = document.getElementById("emojiWork")
  emojiJump.style.transform = `translate(0px, 0px)`
}

function HopUp() {
  const emojiSlide = document.getElementById("emojiEdu")
  emojiSlide.style.transform = `translate(6px, -6px)`
  setTimeout(HopDown, 1000);
}

function HopDown() {
  const emojiSlide = document.getElementById("emojiEdu")
  emojiSlide.style.transform = `translate(0px, 0px)`
}