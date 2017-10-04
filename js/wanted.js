function loadWantedPoster() {
  let picture = document.getElementById('wanted-picture')
  let fname = document.getElementById('first-name')
  let lname = document.getElementById('last-name')
  let hair = document.getElementById('hair')
  let eyes = document.getElementById('eyes')
  let replicantType = document.getElementById('replicant')
  let repType = ['Nexus-6: Self-Sufficient Combat Model','Nexus-6: Basic Pleasure Model','Nexus-6: Prototype Model']
  let userData = JSON.parse(localStorage.getItem('userIntel'))
  let offWorld = new Audio('css/audio/off-world-ad.mp3');
  let neon = new Audio('css/audio/neon-light.mp3');
  let image = localStorage.getItem('imgData')
  offWorld.loop = true;
  offWorld.play();
  neon.loop = true;
  neon.play();
  if(userData){
    if (image) {
      picture.src = image
    }else{
      picture.src = 'css/images/punching_gossling.jpeg'
    }
    fname.textContent = userData['fname']
    lname.textContent = userData['lname']
    hair.textContent = userData['hair']
    eyes.textContent = userData['eyes']
    replicantType.textContent = repType[Math.floor(Math.random()*repType.length)]
  }else{
    picture.src = 'css/images/punching_gossling.jpeg'
    fname.textContent = "Roy"
    lname.textContent = "Batty"
    hair.textContent = "Blonde"
    eyes.textContent = "Blue"
    replicantType.textContent = repType[0]
  }
}

loadWantedPoster()


function flashWanted() {
  var wantedFlash = document.getElementsByClassName('wanted-flash')
  setInterval(function(){
    wantedFlash[0].classList.toggle('blink')
    wantedFlash[1].classList.toggle('blink')
  }, 220)
}

flashWanted()

  let reset = document.getElementById('btn-reset')
  reset.addEventListener('click', function(){
    console.log('test');
    localStorage.clear()
    window.location.href = "index.html"
  })
