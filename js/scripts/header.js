window.onscroll = function (ev) {
  const header = document.querySelector('.s-header');
  console.log(window.scrollY);
  if (window.scrollY > 200) {
    header.style.backgroundColor = '#27272d';
  } else {
    header.style.backgroundColor = 'transparent';
  }
};
