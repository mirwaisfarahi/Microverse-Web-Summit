const moreBtn = document.querySelector('#more-speaker');
const lessBtn = document.querySelector('#less-speaker');
const speakers = document.querySelectorAll('.hide');

if (moreBtn) {
  moreBtn.addEventListener('click', () => {
    Array.from(speakers).forEach((speaker) => {
      speaker.classList.remove('hide');
    });

    moreBtn.classList.add('hide-btn');
    lessBtn.classList.remove('hide-btn');
    lessBtn.classList.add('show-btn');
  });
}

if (lessBtn) {
  lessBtn.addEventListener('click', () => {
    Array.from(speakers).forEach((speaker) => {
      speaker.classList.add('hide');
    });

    moreBtn.classList.remove('hide-btn');
    moreBtn.classList.add('show-btn');
    lessBtn.classList.remove('show-btn');
    lessBtn.classList.add('hide-btn');
  });
}