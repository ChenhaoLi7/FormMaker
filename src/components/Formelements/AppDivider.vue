<template>
  <div class="app-divider" @drop="handleDrop" @dragover.prevent>
    <!-- 分割线内容 -->
    <hr />
    <p>Drop here</p>
  </div>
</template>

<script>
export default {
  name: 'AppDivider', // 使用多单词名称
  methods: {
    handleDrop(event) {
      // 拖拽处理逻辑
      const data = event.dataTransfer.getData('text');
      console.log('Dropped data:', data);
    },
  },
};
</script>

<style scoped>
.app-divider {
  text-align: center;
  padding: 20px;
}

.app-divider hr {
  border: none;
  border-top: 2px dashed #ccc;
  margin: 10px 0;
}
</style>
