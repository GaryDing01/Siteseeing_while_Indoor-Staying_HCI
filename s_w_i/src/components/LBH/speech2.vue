<template>
<!-- 语音合成 -->
    <button @click="play">播放</button>
</template>
<script>
const synth = window.speechSynthesis;
const msg = new SpeechSynthesisUtterance();
export default {
  data() {
    return {};
  },
  methods: {
    play() {
      this.handleSpeak('交个朋友啊') // 传入需要播放的文字
    },
    // 语音播报的函数
    handleSpeak(text) {
      msg.text = text;     // 文字内容
      msg.lang = "zh-CN";  // 使用的语言:中文
      msg.volume = 1;      // 声音音量：1
      msg.rate = 1;        // 语速：1
      msg.pitch = 1;       // 音高：1
      synth.speak(msg);    // 播放
    },
    // 语音停止
    handleStop(e) {
      msg.text = e;
      msg.lang = "zh-CN";
      synth.cancel(msg);
    }
  }
};
</script>
