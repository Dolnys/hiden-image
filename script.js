const arrowBtn = document.querySelector('.arrow');
const arrowIcon = document.querySelector('.fas');
const img = document.querySelector('.item1');

// 1. arrow listener
// 2. adding class hide
// 3. turning arrow

const showImg = () => {
  img.classList.toggle('hide');
};

arrowBtn.addEventListener('click', showImg);
