const acc_btn = document.querySelectorAll('.action-button');

acc_btn.forEach((el, i) => {
  el.addEventListener('click', () => {
    const cross = el.previousElementSibling;
    const panel = el.nextElementSibling;
    cross.classList.toggle('rotate')
    panel.style.maxHeight ? 
      panel.style.maxHeight = null: 
        panel.style.maxHeight = panel.scrollHeight + "px";
    el.classList.toggle('active');
  })
})