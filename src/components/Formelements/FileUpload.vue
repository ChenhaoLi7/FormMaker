<template>
  <div class="file-upload-container">
    <div v-if="!file" class="upload-btn" @click="triggerFileInput">选择文件</div>
    <div v-else class="file-info">
      <span>{{ file.name }}</span>
      <button class="upload-btn" @click="uploadFile">上传文件</button>
    </div>
    <input type="file" ref="fileInput" @change="fileSelected" style="display: none;" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    fileSelected(event) {
      this.file = event.target.files[0];
    },
    async uploadFile() {
      if (!this.file) return;

      const formData = new FormData();
      formData.append('file', this.file);

      try {
        await this.uploadToServer(formData);
        alert('文件上传成功');
        this.file = null;
      } catch (error) {
        console.error('上传失败', error);
      }
    },
    async uploadToServer(formData) {
      // 这里替换为你的上传URL和配置
      const response = await fetch('your-upload-url', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('网络响应不是ok');
      }
      return await response.json();
    },
  },
};
</script>



<style scoped>
.file-upload-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 20px;
  background-color: #f7f7f7;
}

.upload-btn {
  padding: 10px 20px;
  background-color: #00c3ff49;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
}

.file-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.file-info span {
  margin-right: 20px;
}
</style>
