document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.portfolio-item');
  const expandedView = document.getElementById('expandedView');
  const expandedImage = document.getElementById('expandedImage');
  const closeButton = document.getElementById('closeButton');

  items.forEach(item => {
      item.addEventListener('click', () => {
          const imgSrc = item.querySelector('img').src;
          expandedImage.src = imgSrc;
          expandedView.style.display = 'flex';

          items.forEach(i => {
              if (i !== item) {
                  i.classList.add('blur');
              }
          });
      });
  });

  expandedView.addEventListener('click', () => {
    expandedView.style.display = 'none';
    items.forEach(i => i.classList.remove('blur'));
  });
});
