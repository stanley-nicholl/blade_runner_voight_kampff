let userData = JSON.parse(localStorage.getItem('userIntel'))
if (userData) {
  window.location.href = "wanted.html"
}

function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
    window.location.href = "apology.html"
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
    window.location.href = "apology.html"
  }

  if (window.matchMedia('screen and (max-width: 768px)').matches) {
    window.location.href = "apology.html"
  }

  if (window.matchMedia('screen and (max-height: 600px)').matches) {
    window.location.href = "apology.html"
  }

}

getOS()

function openingAudio() {
  let creditAudio = new Audio('css/audio/Opening_credits.mp3');
  console.log(creditAudio);
  creditAudio.play();
}

openingAudio()


function explosion(){
  setTimeout(function(){
    let titleDrop = new Audio('css/audio/explosion.mp3');
    titleDrop.play();
  }, 18500)
}

explosion()

function onTimerElapsed (ms) {
  let logo = document.getElementById('logo')
  let marquee = document.getElementById('scroll')
  while (marquee.firstChild) {
    marquee.removeChild(marquee.firstChild);
  }
  logo.style.className = "fadeIn animated logo"
  logo.style.transition = "display 1000"
  logo.style.display = "block"
  logo.style.width = "60%"
  logo.style.height = "auto"
  logo.style.margin = "15rem auto 0 auto"

  setTimeout(function(){
    window.location.href = "processing.html"
  }, 3000)
}

onTimerElapsed(19000)
