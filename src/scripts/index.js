const acc_btn = document.querySelectorAll('.action-button');
const cross_btn = document.querySelectorAll('.cross');

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
cross_btn.forEach((el, i) => {
  el.addEventListener('click', () => {
    const panel = el.nextElementSibling.nextElementSibling;
    el.classList.toggle('rotate')
    panel.style.maxHeight ? 
      panel.style.maxHeight = null: 
        panel.style.maxHeight = panel.scrollHeight + "px";
    el.nextElementSibling.classList.toggle('active');
  })
})