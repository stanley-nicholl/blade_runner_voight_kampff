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
  }, 2500)
}
