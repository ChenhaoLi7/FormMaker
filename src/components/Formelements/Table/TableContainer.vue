<template>
  <div class="table-container">
    <GridRow v-for="row in 2" :key="row">
      <GridColumn
        v-for="col in 2"
        :key="col"
        @component-dropped="handleComponentDropped(row, col, $event)"
      >
        <template v-if="components[row-1][col-1]">
          <!-- 根据components数组渲染对应的组件 -->
          <component :is="components[row-1][col-1]"></component>
        </template>
        <template v-else>
          <!-- 如果没有组件则显示提示 -->
          Drop here
        </template>
      </GridColumn>
    </GridRow>
  </div>
</template>

<script>
import GridRow from './GridRow.vue';
import GridColumn from './GridColumn.vue';

export default {
  components: {
    GridRow,
    GridColumn
  },
  data() {
    return {
      // 初始化一个2x2的数组来跟踪每个单元格的组件
      components: [[null, null], [null, null]]
    };
  },
  methods: {
    handleComponentDropped(rowIndex, colIndex, componentName) {
      // 当组件被拖放时更新components数组
      this.$set(this.components[rowIndex - 1], colIndex - 1, componentName);
    }
  }
};
</script>

<style>
.table-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
