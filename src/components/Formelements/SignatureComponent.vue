<template>
  <!-- 您的模板代码，定义组件的HTML结构 -->
  <div class="signature-pad">
    <canvas ref="canvas" class="signature-canvas"></canvas>
    <div class="buttons">
      <button @click="clearCanvas">清除</button>
      <button @click="saveSignature">保存</button>
    </div>
  </div>
</template>

<script>
// 导入 SignaturePad 库
import SignaturePad from 'signature_pad';

export default {
  data() {
    return {
      signaturePad: null,
    };
  },
  mounted() {
    this.initializeCanvas();
  },
  methods: {
    initializeCanvas() {
      const canvas = this.$refs.canvas;
      canvas.width = 600;
      canvas.height = 200;
      this.signaturePad = new SignaturePad(canvas);
    },
    clearCanvas() {
      if (this.signaturePad) {
        this.signaturePad.clear();
      }
    },
    saveSignature() {
      if (this.signaturePad && !this.signaturePad.isEmpty()) {
        const signatureData = this.signaturePad.toDataURL();
        console.log(signatureData); // 这里可以发送数据到服务器或者其他处理
      }
    },
  },
};
</script>

<style scoped>
.signature-pad {
  border: 2px solid #ccc; /* 显示边框 */
  border-radius: 8px; /* 圆角 */
  padding: 16px; /* 内部间距 */
  background-color: #fff; /* 背景色 */
}

.signature-canvas {
  border: 1px solid #000; /* 显示签名板的边框 */
  border-radius: 4px; /* 签名板的圆角 */
}

.buttons {
  margin-top: 10px; /* 按钮与签名板的间距 */
  text-align: center;
}

button {
  margin: 0 8px; /* 按钮间距 */
  background-color: #007aff; /* 苹果蓝 */
  color: white;
  border: none;
  padding: 8px 16px; /* 按钮内间距 */
  border-radius: 13px; /* 按钮圆角 */
  font-size: 16px; /* 字体大小 */
  cursor: pointer; /* 鼠标样式 */
  transition: background-color 0.3s; /* 过渡效果 */
}

button:hover {
  background-color: #0051a8; /* 鼠标悬停颜色变化 */
}

button:active {
  background-color: #003d7a; /* 鼠标点击颜色变化 */
}
</style>
