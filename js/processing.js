var submit = document.getElementById('submit')
var userIntel = {}
var comply = document.getElementById('comply')
submit.addEventListener('click', function(event){
  let fname = document.getElementById('first_name')
  let lname = document.getElementById('last_name')
  let hair = document.getElementById('hair')
  let eyes = document.getElementById('eyes')
  event.preventDefault()
  if(fname.value === '' || lname.value === '' || hair.value === '' || eyes.value === ''){
    alert('FILL OUT ALL ELEMENTS TO COMPLY')
  }else{
    userIntel['fname'] = fname.value
    userIntel['lname'] = lname.value
    userIntel['hair'] = hair.value
    userIntel['eyes'] = eyes.value
    localStorage.setItem('userIntel', JSON.stringify(userIntel))
    fname.value = ""
    lname.value = ""
    hair.value = ""
    eyes.value = ""
    comply.textContent = ""
    comply.textContent = "SUBMITTED. STAND BY!"
    setTimeout(function(){
      window.location.href = "test.html"
    }, 3500)
  }
})

function complyWarning() {
    setInterval(function(){
      comply.classList.toggle('blink')
    }, 800)
}

complyWarning()

function backgroundMusic(){
    let bgMusic = new Audio('css/audio/processing_song.mp3');
    bgMusic.play();
    bgMusic.loop = true;
}

backgroundMusic()
