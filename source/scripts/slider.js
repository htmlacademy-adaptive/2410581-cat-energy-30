const slider = document.querySelector('.slider__input');
const dragLine = document.querySelector('.slider__drag-line');
const imageBefore = document.querySelector('.slider__image-before');
const imageAfter = document.querySelector('.slider__image-after');

if (slider) {
  slider.oninput = () => {
    dragLine.style.left = `${slider.value}%`;
    imageBefore.style.clipPath = `inset(0 ${100 - slider.value}% 0 0)`;
    imageAfter.style.clipPath = `inset(0 0 0 ${slider.value}%)`;
  };
}
