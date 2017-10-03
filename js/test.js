let question = document.getElementsByClassName('question')[0]
let answer = document.getElementsByClassName('answers')[0]
let start = document.getElementById('start')
let answerAreas = document.getElementsByClassName('answer')
let eyeVideo = document.getElementById('eye-video')
let answerOption1 = document.getElementById('answer1')
let answerOption2 = document.getElementById('answer2')
let prompt = document.getElementById('prompt')
let selection1 = document.getElementById('answer1')
let selection2 = document.getElementById('answer2')
let counter = 0;

function progressBar() {
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
          // launchTest()
        }, 100)
    } else {
        width++;
        elem.style.width = width + '%';
        percent.textContent = `${width}%`
    }
  }
}

progressBar()

function clearProgressInfo(){
  let progressArea = document.getElementById("progress-area")
  let contentArea = document.getElementById("temp-container")
  let tempBG = document.getElementById("temp-black-bg")
  let body = document.getElementsByTagName('body')[0]
  let test_intro = new Audio('css/audio/test_intro.mp3');
  contentArea.removeChild(progressArea)
  contentArea.style.height = 0;
  body.removeChild(tempBG)
  test_intro.play();
}

/*START TEST*/
start.addEventListener('click', function(){
  let eyeScanner = document.getElementById('eye-scanner')
  answerAreas[0].style.border = "solid #fff 4px"
  answerAreas[0].style.border = "solid #fff 4px"
  question.removeChild(start)
  //webcam stuff
  //eye scanner
  eyeScanner.style.transform = "rotate(45deg)"
  setTimeout(function(){
    eyeScanner.src = 'css/images/eye_scanner_on2.png'
  }, 1000)
  setTimeout(function(){
    eyeVideo.innerHTML = `<source  src="css/video/vk_eye_scanning.mp4" type="video/mp4" />
    Your browser does not support the video tag.`
  }, 1700)
  setTimeout(function(){
    question1()
  }, 200)
  togglePrompt()
})

/*DISPLAY FIRST QUESTIN*/
function question1(){
  let backgroundNoise = new Audio('css/audio/background_maching.mp3')
  let question1Audio = new Audio('css/audio/question_1.mp3');
  let testProg1 = document.getElementById('test-progress-1')
  backgroundNoise.loop = true;
  backgroundNoise.volume = .3;
  backgroundNoise.play()
  testProg1.className = 'active-progress'
  answerAreas[0].style.border = 'solid #fff 4px'
  answerAreas[1].style.border = 'solid #fff 4px'
  question.innerHTML = `<p>Question 1 of 3: It's your birthday. Someone gives you a calfskin wallet.</p>`
  answerOption1.innerHTML = `<div class="answer-title">OPTION 1</div><p>I wouldn't accept it. Also, I'd report the person who gave it to me to the police.</p>`
  answerOption2.innerHTML = `<div class="answer-title">OPTION 2</div><p>Why would I need a new wallet? Why's it made of calfskin?</p>`
  counter++
  setTimeout(function(){
    question1Audio.play();
  }, 700)
}

/*DISPLAY SECOND AND THIRD QUESTIONS*/
selection1.addEventListener('click', nextQuestion)
selection2.addEventListener('click', nextQuestion)
function nextQuestion(){
  if(counter === 1){
    let question1Audio = new Audio('css/audio/question_2.mp3');
    let testProg2 = document.getElementById('test-progress-2')
    testProg2.className = 'active-progress'
    question.innerHTML = `<p>Question 2 of 3: You've got a little boy. He shows you his butterfly collection plus the killing jar.</p>`
    answerOption1.innerHTML = `<div class="answer-title">OPTION 1</div><p>I'd take him to the doctor.</p>`
    answerOption2.innerHTML = `<div class="answer-title">OPTION 2</div><p>Why does he keep butterflies? Seems like a normal thing.</p>`
    question1Audio.play();
    counter++
  }else if(counter === 2){
    let question1Audio = new Audio('css/audio/question_3.mp3');
    let testProg3 = document.getElementById('test-progress-3')
    testProg3.className = 'active-progress'
    question.innerHTML = `<p>Question 3 of 3: You're watching television. Suddenly you realize there's a wasp crawling on your arm.</p>`
    answerOption1.innerHTML = `<div class="answer-title">OPTION 1</div><p>I'd kill it.</p>`
    answerOption2.innerHTML = `<div class="answer-title">OPTION 2</div><p>Do they write these questions down for you? Or do you make them up?</p>`
    question1Audio.play();
    counter++
  }else{
    setTimeout(function(){
      window.location.href = "wanted.html"
    }, 3500)
  }
}


/*BLINK USER PROMPT*/
function togglePrompt(){
  setInterval(function(){
    prompt.classList.toggle('blink')
  }, 400)
}

  /*<div class="question">
    <p>It's your birthday. Someone gives you a calfskin wallet.</p>
  </div>
</div>
<div class="answers">
  <div class="answer answer1">
    <div class="answer-title">
      OPTION 1
    </div>
  </div>
  <div class="answer answer2">
    <div class="answer-title">
      OPTION 2
    </div>
    <div>
    I wouldn't accept it. Also, I'd report the person who gave it to me to the police.
    </div>
  </div>
</div>*/

/*Web cam SECTION*/

// function webCam(){
//
//
//     navigator.getUserMedia({
//       video: true
//     }, function(stream) {
//       var video = document.getElementById("v");
//       var canvas = document.getElementById("c");
//       var button = document.getElementById("b");
//       video.srcObject = stream;
//       video.play();
//       button.disabled = false;
//       button.onclick = function() {
//         canvas.getContext("2d").drawImage(video, 0, 0, 300, 300, 0, 0, 300, 300);
//         var img = canvas.toDataURL("image/png");
//         alert("done");
//       };
//     }, function(err) {
//       alert("there was an error " + err)
//     });
//
// }



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
