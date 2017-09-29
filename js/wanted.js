function loadWantedPoster() {
  let picture = document.getElementById('wanted-picture')
  let fname = document.getElementById('first-name')
  let lname = document.getElementById('last-name')
  let hair = document.getElementById('hair')
  let eyes = document.getElementById('eyes')
  let repType = ['Nexus - 6: Self-Sufficient Combat Model','Nexus-6: Basic Pleasure Model','Nexus - 6: Prototype Model']
  let userData = JSON.parse(localStorage.getItem('userIntel'))



  picture.src = 'css/images/test-pic.jpeg'
  fname.textContent = userData['fname']
  lname.textContent = userData['lname']
  hair.textContent = userData['hair']
  eyes.textContent = userData['eyes']
}


loadWantedPoster()
