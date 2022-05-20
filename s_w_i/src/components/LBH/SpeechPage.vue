<template>
  <div class="container">
    <div class="bar">
      <el-button
        type="primary"
        icon="el-icon-microphone"
        id="button-play-ws"
      ></el-button>
      <div id="transcription"></div>
    </div>
    <div style="display: none" id="sorry">抱歉没有找到对应的内容。</div>
    <div id="recommendation">
      热门景点推荐
      <div style="height: 30px"></div>
      <div style="display: flex; flex-direction: row">
        <el-card> 景点1 </el-card>
        <el-card> 景点1 </el-card>
        <el-card> 景点1 </el-card>
        <el-card> 景点1 </el-card>
      </div>
    </div>
    <div>
      <el-card style="display: none; width: 100%; height: 100%" id="HuangShan">
        您想找的可能是：
        <div style="height: 30px"></div>
        <div style="display: flex; justify-content: space-between">
          <img src="@/assets/HuangShan.jpg" alt="黄山" height="500px" />
          <div style="width: 50px"></div>
          <div>
            <h2 style="text-align: center">黄山</h2>
            <p>
              黄山，古称黟山，位于安徽省黄山市境内，地处安徽省南部、黄山市北部，地跨歙县、休宁县、黟县和黄山区、徽州区，东起黄狮岭，西至小岭脚，北始二龙桥，南达汤口镇，地跨东经118°01′至118°17′、北纬30°01′至30°18′，山境南北长约40千米，东西宽约30千米，总占地面积约1200平方千米，属亚热带季风气候；以奇松、怪石、云海、温泉、冬雪“五绝”及历史遗存、书画、文学、传说、名人“五胜”著称于世，有“天下第一奇山”“天开图画”“松海云川”之称。
            </p>
            <p>
              黄山境内分为温泉、云谷、玉屏、北海、松谷、钓桥、浮溪、洋湖、福固九个管理区，有千米以上高峰88座，其中“莲花”“光明顶”“天都”为黄山三大主峰，海拔均逾1800米。黄山境内有大量的文化遗存，如古蹬道、古楹联、古桥、古亭、古寺、古塔等，另有现存摩崖石刻300余处，孕育了中国山水画“黄山画派”；黄山境内动植物资源丰富，森林覆盖率达84.7%，植被覆盖率达93.6%，已知脊椎动物达300余种，鸟类170余种；有“五岳归来不看山，黄山归来不看岳”之名。
            </p>
            <p>
              1982年，黄山风景区被国务院公布为首批国家级重点风景名胜区。
              1985年，黄山风景区被中国旅游报公布为中国十大风景名胜区之一。
              1990年12月，黄山被联合国教科文组织列入《世界文化与自然遗产名录》。
              2004年2月，黄山被联合国教科文组织公布为世界地质公园。
            </p>
          </div>
        </div>
      </el-card>
      <div style="display: none" id="GreatWall">
        您想找的可能是：
        <div style="height: 30px"></div>
        <!-- <img src="@/assets/HuangShan.jpg" alt="黄山" /> -->
        <h2>长城</h2>
        <!-- <p>
          黄山，古称黟山，位于安徽省黄山市境内，地处安徽省南部、黄山市北部，地跨歙县、休宁县、黟县和黄山区、徽州区，东起黄狮岭，西至小岭脚，北始二龙桥，南达汤口镇，地跨东经118°01′至118°17′、北纬30°01′至30°18′，山境南北长约40千米，东西宽约30千米，总占地面积约1200平方千米，属亚热带季风气候；以奇松、怪石、云海、温泉、冬雪“五绝”及历史遗存、书画、文学、传说、名人“五胜”著称于世，有“天下第一奇山”“天开图画”“松海云川”之称。
        </p>
        <p>
          黄山境内分为温泉、云谷、玉屏、北海、松谷、钓桥、浮溪、洋湖、福固九个管理区，有千米以上高峰88座，其中“莲花”“光明顶”“天都”为黄山三大主峰，海拔均逾1800米。黄山境内有大量的文化遗存，如古蹬道、古楹联、古桥、古亭、古寺、古塔等，另有现存摩崖石刻300余处，孕育了中国山水画“黄山画派”；黄山境内动植物资源丰富，森林覆盖率达84.7%，植被覆盖率达93.6%，已知脊椎动物达300余种，鸟类170余种；有“五岳归来不看山，黄山归来不看岳”之名。
        </p>
        <p>
          1982年，黄山风景区被国务院公布为首批国家级重点风景名胜区。
          1985年，黄山风景区被中国旅游报公布为中国十大风景名胜区之一。
          1990年12月，黄山被联合国教科文组织列入《世界文化与自然遗产名录》。
          2004年2月，黄山被联合国教科文组织公布为世界地质公园。
        </p> -->
      </div>
    </div>
  </div>
</template>
<script>
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
      //每次新录音的时候清空前面的
      document.getElementById("HuangShan").style.display = "none";
      document.getElementById("GreatWall").style.display = "none";
      document.getElementById("sorry").style.display = "none";

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
      if (transcription.textContent.lastIndexOf("黄山") != -1) {
        document.getElementById("HuangShan").style.display = "block";
        document.getElementById("recommendation").style.display = "none";
      } else if (transcription.textContent.lastIndexOf("长城") != -1) {
        document.getElementById("GreatWall").style.display = "block";
        document.getElementById("recommendation").style.display = "none";
      } else {
        document.getElementById("sorry").style.display = "block";
        document.getElementById("recommendation").style.display = "block";
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
#transcription {
  display: block;
  width: 100%;
  height: 3em;
  /* border: 1px solid #333333; */
  line-height: 3em;
}
.el-card {
  height: 500px;
  width: 500px;
}
</style>