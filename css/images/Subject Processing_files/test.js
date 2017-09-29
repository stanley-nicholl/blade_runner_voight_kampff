function move() {
    var elem = document.getElementById("progress");
    var percent = document.getElementById("progress-percent")
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            percent.textContent = `${width}%`
        }
    }
}

move()











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
