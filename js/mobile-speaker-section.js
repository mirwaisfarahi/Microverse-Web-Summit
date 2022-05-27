const main = document.querySelector('#main');
const sponsorsSection = document.querySelector('#sponsors-section');

const speakersSection = document.createElement('section');
speakersSection.setAttribute('id', 'speakers-section');

speakersSection.innerHTML = `<div class="speakers">
<div class="speaker">
    <img class="image1" src="images/chess.png" alt="background">
    <img class="image2" src="images/pewds.png" alt="Felix Kjellberg">
    <div class="speaker-details">
        <h3 class="name">Shigeru Miyamoto</h3>
        <i class="skill">A Japanese video game designer, producer and game director.</i>
        <p class="bio">He is the creator of some of the most acclaimed and best-selling game franchises of all time,
            including Mario, The Legend of Zelda, Donkey Kong, Star Fox and Pikmin.</p>
    </div>
</div>
<div class="speaker">
    <img class="image1" src="images/chess.png" alt="background">
    <img class="image2" src="images/pewds.png" alt="Felix Kjellberg">
    <div class="speaker-details">
        <h3 class="name">Shigeru Miyamoto</h3>
        <i class="skill">A Japanese video game designer, producer and game director.</i>
        <p class="bio">He is the creator of some of the most acclaimed and best-selling game franchises of all time,
            including Mario, The Legend of Zelda, Donkey Kong, Star Fox and Pikmin.</p>
    </div>
</div>
<div class="speaker hide">
    <img class="image1" src="images/chess.png" alt="background">
    <img class="image2" src="images/pewds.png" alt="Felix Kjellberg">
    <div class="speaker-details">
        <h3 class="name">Shigeru Miyamoto</h3>
        <i class="skill">A Japanese video game designer, producer and game director.</i>
        <p class="bio">He is the creator of some of the most acclaimed and best-selling game franchises of all time,
            including Mario, The Legend of Zelda, Donkey Kong, Star Fox and Pikmin.</p>
    </div>
</div>
</div>

<div class="speakers">
<div class="speaker hide">
    <img class="image1" src="images/chess.png" alt="background">
    <img class="image2" src="images/pewds.png" alt="Felix Kjellberg">
    <div class="speaker-details">
        <h3 class="name">Shigeru Miyamoto</h3>
        <i class="skill">A Japanese video game designer, producer and game director.</i>
        <p class="bio">He is the creator of some of the most acclaimed and best-selling game franchises of all time,
            including Mario, The Legend of Zelda, Donkey Kong, Star Fox and Pikmin.</p>
    </div>
</div>
<div class="speaker hide">
    <img class="image1" src="images/chess.png" alt="background">
    <img class="image2" src="images/pewds.png" alt="Felix Kjellberg">
    <div class="speaker-details">
        <h3 class="name">Shigeru Miyamoto</h3>
        <i class="skill">A Japanese video game designer, producer and game director.</i>
        <p class="bio">He is the creator of some of the most acclaimed and best-selling game franchises of all time,
            including Mario, The Legend of Zelda, Donkey Kong, Star Fox and Pikmin.</p>
    </div>
</div>
<div class="speaker hide">
    <img class="image1" src="images/chess.png" alt="background">
    <img class="image2" src="images/pewds.png" alt="Felix Kjellberg">
    <div class="speaker-details">
        <h3 class="name">Shigeru Miyamoto</h3>
        <i class="skill">A Japanese video game designer, producer and game director.</i>
        <p class="bio">He is the creator of some of the most acclaimed and best-selling game franchises of all time,
            including Mario, The Legend of Zelda, Donkey Kong, Star Fox and Pikmin.</p>
    </div>
</div>
</div>
<button type="button" id="more-speaker" class="show-btn" >More <i class="fa fa-angle-down angle" aria-hidden="true"></i></button>
<button type="button" id="less-speaker" class="hide-btn" >Less <i class="fa fa-angle-up angle" aria-hidden="true"></i></button>`;

main.insertBefore(speakersSection, sponsorsSection);

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