<template>
  <div class="grid-container">
    <slot></slot> <!-- 这里是其他组件的插槽 -->
  </div>
</template>

<script>
export default {
  name: 'GridContainer'
  // 如果需要，这里可以添加组件逻辑
};
</script>

<style>
.grid-container {
  display: flex; /* 使用flex布局方便内部的GridRow布局 */
  flex-direction: column; /* GridRow作为行，垂直堆叠 */
  width: 100%; /* 占满父容器的宽度 */
  gap: 10px; /* 行与行之间的间隙 */
  padding: 10px; /* 内边距 */
  border: 1px solid #ebebeb; /* 边框样式 */
  border-radius: 4px; /* 圆角 */
  overflow: hidden; /* 防止内容溢出 */
}
</style>
