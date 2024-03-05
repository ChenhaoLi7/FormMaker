<template>
  <div class="grid-column" @dragover.prevent="allowDrop" @drop="handleDrop">
    <slot></slot> <!-- 插槽用于其他基础组件 -->
  </div>
</template>

<script>
export default {
  name: 'GridColumn',
  methods: {
    allowDrop() {
      // 这里我们不需要event参数，所以可以移除它
    },
    handleDrop(event) {
      const componentData = event.dataTransfer.getData('component');
      this.$emit('component-dropped', componentData);
    }
  }
};
</script>



<style scoped>
.grid-column {
  flex-grow: 1; /* 允许列成长填满可用空间 */
  border: 1px dashed #ccc; /* 边框样式，虚线表示可以放置 */
  min-height: 100px; /* 最小高度 */
  display: flex; /* 使用flex布局方便内容居中 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  padding: 10px; /* 内边距 */
}
</style>
