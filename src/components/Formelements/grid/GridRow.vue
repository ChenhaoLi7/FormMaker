<template>
  <div class="grid-row">
    <slot></slot> <!-- 这里是GridColumn的插槽 -->
  </div>
</template>

<script>
export default {
  name: 'GridRow'
  // 如果需要，这里可以添加组件逻辑
};
</script>

<style>
.grid-row {
  display: flex; /* 使用flex布局方便内部的GridColumn布局 */
  gap: 10px; /* 列与列之间的间隙 */
}
</style>
