const celebrateButton = document.querySelector('#celebrate-button');
const celebrationMessage = document.querySelector('#celebration-message');
const photoInput = document.querySelector('#birthday-photo-input');
const birthdayPhoto = document.querySelector('#birthday-photo');
const photoPlaceholder = document.querySelector('#photo-placeholder');
const audioInput = document.querySelector('#birthday-audio-input');
const birthdayAudio = document.querySelector('#birthday-audio');
const audioName = document.querySelector('#audio-name');
let currentAudioUrl;
const sparkleSymbols = ['✨', '💖', '🌸', '⭐', '🎉'];
const birthdayCard = document.querySelector('.birthday-card');
const themeButtons = document.querySelectorAll('.theme-option');

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    birthdayCard.dataset.theme = button.dataset.theme;
    document.body.dataset.theme = button.dataset.theme;
    themeButtons.forEach((option) => {
      option.setAttribute('aria-pressed', String(option === button));
    });
  });
});

photoInput.addEventListener('change', () => {
  const photo = photoInput.files[0];
  if (!photo) return;

  birthdayPhoto.src = URL.createObjectURL(photo);
  birthdayPhoto.hidden = false;
  photoPlaceholder.hidden = true;
});

audioInput.addEventListener('change', () => {
  const song = audioInput.files[0];
  if (!song) return;

  if (currentAudioUrl) URL.revokeObjectURL(currentAudioUrl);
  currentAudioUrl = URL.createObjectURL(song);
  birthdayAudio.src = currentAudioUrl;
  birthdayAudio.hidden = false;
  audioName.textContent = song.name;
});

celebrateButton.addEventListener('click', () => {
  celebrationMessage.textContent = 'A shower of love and good wishes is coming your way!';

  for (let i = 0; i < 28; i += 1) {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    sparkle.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.animationDelay = `${Math.random() * 0.9}s`;
    sparkle.style.animationDuration = `${2 + Math.random() * 1.5}s`;
    document.body.appendChild(sparkle);
    sparkle.addEventListener('animationend', () => sparkle.remove(), { once: true });
  }
});
