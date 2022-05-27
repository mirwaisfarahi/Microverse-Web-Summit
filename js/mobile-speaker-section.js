const main = document.querySelector('#main');
const sponsorsSection = document.querySelector('#sponsors-section');

const speakersSection = document.createElement('section');
speakersSection.setAttribute('id', 'speakers-section');

speakersSection.innerHTML = `
<h3>Featured Speakers</h3>
<div class="section-underline" style="text-align:center; margin-left: 48%; margin-bottom: 0"></div>
<div id = "all-speakers">
<div class="speakers">
<div class="speaker">
    <img class="image1" src="images/chess.png" alt="background">
    <img class="image2" src="images/adwoa.png" alt="Felix Kjellberg">
    <div class="speaker-details">
        <h3 class="name">Adwoa Dev</h3>
        <i class="skill">Modal and Co-founder at Gurls Talk</i>
        <div class="speaker-underline"></div>
        <p class="bio">Adwoa was named a Next Generation Leader by Time in 2018, and appeared on Forbes’ 30 Under 30 in 2019. She’s celebrated for her work in fashion, and for her activist platform, Gurls Talk. This year, Adwoa pivoted into film and TV with a debut in Top Boy.
        </p>
    </div>
</div>
<div class="speaker">
    <img class="image1" src="images/chess.png" alt="background">
    <img class="image2" src="images/pewds.png" alt="Felix Kjellberg">
    <div class="speaker-details">
        <h3 class="name">Shigeru Miyamoto</h3>
        <i class="skill">CEO at Spring Health</i>
        <div class="speaker-underline"></div>
        <p class="bio">He is the creator of some of the most acclaimed and best-selling game franchises of all time,
        including Mario, The Legend of Zelda, Donkey Kong, Star Fox and Pikmin.</p>
    </div>
</div>
<div class="speaker hide">
    <img class="image1" src="images/chess.png" alt="background">
    <img class="image2" src="images/palmer.jpg" alt="Felix Kjellberg">
    <div class="speaker-details">
        <h3 class="name">Palmer Luckey</h3>
        <i class="skill">Founder at Anduril</i>
        <div class="speaker-underline"></div>
        <p class="bio">Palmer is an inventor, innovator and entrepreneur. He is the founder of defence technology company Anduril Industries, designer of the Oculus Rift, and the founder of Oculus VR, which was acquired by Facebook in 2014 for US$2.3 billion.

        </p>
    </div>
</div>
</div>

<div class="speakers">
<div class="speaker hide">
    <img class="image1" src="images/chess.png" alt="background">
    <img class="image2" src="images/toto.png" alt="Felix Kjellberg">
    <div class="speaker-details">
        <h3 class="name">Toto Wolff</h3>
        <i class="skill">Team Principal & CEO at Mercedes-AMG Petronas</i> 
        <div class="speaker-underline"></div>
        <p class="bio">He is the creator of some of the most acclaimed and best-selling game franchises of all time,
            including Mario, The Legend of Zelda, Donkey Kong, Star Fox and Pikmin.</p>
    </div>
</div>
<div class="speaker hide">
    <img class="image1" src="images/chess.png" alt="background">
    <img class="image2" src="images/markus.png" alt="Felix Kjellberg">
    <div class="speaker-details">
        <h3 class="name">Markus Villig</h3>
        <i class="skill">Founder & CEO at Bolt</i>
        <div class="speaker-underline"></div>
        <p class="bio">Markus is the founder and CEO of European super app Bolt. Having launched Bolt in 2013, when he was just 19 years old, Markus is Europe's youngest founder of a billion-dollar company.
        </p>
    </div>
</div>
<div class="speaker hide">
    <img class="image1" src="images/chess.png" alt="background">
    <img class="image2" src="images/robby.png" alt="Felix Kjellberg">
    <div class="speaker-details">
        <h3 class="name">Robby Yung</h3>
        <i class="skill">CEO at Animoca Brands</i>
        <div class="speaker-underline"></div>
        <p class="bio">Animoca Brands is a leader in blockchain games, and the company behind the Sandbox virtual world. Robby has spent his career in the TMT industry, from the early days of analogue and web 1.0 to traditional ad-supported media and free-to-play games.
        </p>
    </div>
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