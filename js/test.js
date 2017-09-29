function progressBar() {
  testLoading()
  var elem = document.getElementById("progress");
  var percent = document.getElementById("progress-percent")
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
        clearInterval(id);
        setTimeout(function(){
          clearProgressInfo()
        }, 100)
        setTimeout(function(){
          launchTest()
        }, 100)
    } else {
        width++;
        elem.style.width = width + '%';
        percent.textContent = `${width}%`
    }
  }
}

progressBar()


function testLoading() {
  var loadingTest = document.getElementById('loading-test')
    setInterval(function(){
      loadingTest.classList.toggle('blink')
    }, 400)
}

function clearProgressInfo(){
  let progressArea = document.getElementById("progress-area")
  let contentArea = document.getElementById("temp-container")
  let tempBG = document.getElementById("temp-black-bg")
  let body = document.getElementsByTagName('body')[0]
  contentArea.removeChild(progressArea)
  contentArea.style.height = 0;
  body.removeChild(tempBG)
}

/*TEST LAUNCH SECTION*/

function launchTest(){


    navigator.getUserMedia({
      video: true
    }, function(stream) {
      var video = document.getElementById("v");
      var canvas = document.getElementById("c");
      var button = document.getElementById("b");
      video.srcObject = stream;
      video.play();
      button.disabled = false;
      button.onclick = function() {
        canvas.getContext("2d").drawImage(video, 0, 0, 300, 300, 0, 0, 300, 300);
        var img = canvas.toDataURL("image/png");
        alert("done");
      };
    }, function(err) {
      alert("there was an error " + err)
    });

}



/*

test questions:
question 1
It's your birthday. Someone gives you a calfskin wallet.
-I wouldn't accept it. Also, I'd report the person who gave it to me to the police.
-
question 2
You've got a little boy. He shows you his butterfly collection plus the killing jar.
-I'd take him to the doctor.
-
question 3
You're watching television. Suddenly you realize there's a wasp crawling on your arm.
-I'd kill it.
-
*/


// <video id="v" width="300" height="300"></video>
// <input id="b" type="button" disabled="true" value="Take Picture"></input>
// <canvas id="c" style="display:none;" width="300" height="300"></canvas>

// <script>
//   navigator.getUserMedia({
//     video: true
//   }, function(stream) {
//     var video = document.getElementById("v");
//     var canvas = document.getElementById("c");
//     var button = document.getElementById("b");
//     video.srcObject = stream;
//     video.play();
//     button.disabled = false;
//     button.onclick = function() {
//       canvas.getContext("2d").drawImage(video, 0, 0, 300, 300, 0, 0, 300, 300);
//       var img = canvas.toDataURL("image/png");
//       alert("done");
//     };
//   }, function(err) {
//     alert("there was an error " + err)
//   });
// </script>
