<template>
  <div class="container">
    <div class="bar">
      <!-- <el-input
        v-model="input"
        placeholder="请输入内容"
        id="transcription"
      ></el-input> -->
    <textarea id="transcription" readonly="readonly"></textarea>
      <el-button
        type="primary"
        icon="el-icon-microphone"
        id="button-play-ws"
      ></el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
  </div>
</template>
<script>
// export default {
//   data() {
//     return {
//       input: "",
//     };
//   },
// };
window.onload = function () {
  // Test browser support
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition || null;

  if (window.SpeechRecognition === null) {
    document.getElementById("ws-unsupported").classList.remove("hidden");
    document
      .getElementById("button-play-ws")
      .setAttribute("disabled", "disabled");
    // document
    //   .getElementById("button-stop-ws")
    //   .setAttribute("disabled", "disabled");
  } else {
    var recognizer = new window.SpeechRecognition();
    var transcription = document.getElementById("transcription");
    // var log = document.getElementById("log");

    // Recogniser doesn't stop listening even if the user pauses
    recognizer.continuous = false;
    // recognizer.continuous = true;

    // Start recognising
    recognizer.onresult = function (event) {
      transcription.textContent = "";

      for (var i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          // transcription.textContent =
          //   event.results[i][0].transcript +
          //   " (Confidence: " +
          //   event.results[i][0].confidence +
          //   ")";
          transcription.textContent = event.results[i][0].transcript;
        } else {
          transcription.textContent += event.results[i][0].transcript;
        }
      }
    };

    // Listen for errors
    recognizer.onerror = function (event) {
      log.innerHTML =
        "Recognition error: " + event.message + "<br />" + log.innerHTML;
    };
    document
      .getElementById("button-play-ws")
      .addEventListener("click", function () {
        // Set if we need interim results
        // recognizer.interimResults = document.querySelector(
        //   'input[name="recognition-type"][value="interim"]'
        // ).checked;

        try {
          recognizer.start();
          log.innerHTML = "Recognition started" + "<br />" + log.innerHTML;
        } catch (ex) {
          log.innerHTML =
            "Recognition error: " + ex.message + "<br />" + log.innerHTML;
        }
      });

    // document
    //   .getElementById("button-stop-ws")
    //   .addEventListener("click", function () {
    //     recognizer.stop();
    //     log.innerHTML = "Recognition stopped" + "<br />" + log.innerHTML;
    //   });

    // document.getElementById("clear-all").addEventListener("click", function () {
    //   transcription.textContent = "";
    //   log.textContent = "";
    // });
  }
};
</script>
<style scoped>
.container {
  align-content: center;
}
.bar {
  width: 60%;
  display: flex;
  align-content: flex-start;
}
</style>