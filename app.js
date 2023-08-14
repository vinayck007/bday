const portraitImage = document.getElementById('portraitImage');
const backgroundMusic = document.getElementById('backgroundMusic');
const rainContainer = document.getElementById('rainContainer');
const birthdayContainer = document.getElementById('birthday-container');

const raindropImages = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.png',
  '11.png',
  '12.png',
  // Add more image URLs here
];

function showBirthdayMessage() {
  birthdayContainer.style.display = 'block';
  setTimeout(() => {
      showCakeImage();
  }, 2000); // Delay in milliseconds (2 seconds)
}

function showCakeImage() {
  portraitImage.classList.remove('hidden');
  setTimeout(() => {
      startRain();
  }, 2000); // Delay in milliseconds (2 seconds)
}

function startRain() {
  for (let i = 0; i < 40; i++) {
      const raindrop = document.createElement('div');
      raindrop.classList.add('raindrop');
      raindrop.style.left = `${Math.random() * 100}vw`;
      raindrop.style.top = `${Math.random() * -100}%`;
      raindrop.style.backgroundImage = `url(${raindropImages[i % raindropImages.length]})`;
      raindrop.style.animation = `fall ${Math.random() * 5 + 2}s linear infinite`;
      rainContainer.appendChild(raindrop);
  }
  backgroundMusic.play();
}

showBirthdayMessage();

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}