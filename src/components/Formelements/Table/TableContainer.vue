
<template>
  <div class="table-container">
    <!-- 直接循环创建行和列 -->
    <div class="table-row" v-for="row in 2" :key="row">
      <div
        class="table-column"
        v-for="col in 2"
        :key="col"
        @dragover.prevent="allowDrop"
        @drop="handleComponentDropped(row, col, $event)"
      >
        <template v-if="components[row-1][col-1]">
          <!-- 根据components数组渲染对应的组件 -->
          <component :is="getComponentType(components[row-1][col-1])"></component>
        </template>
        <template v-else>
          <!-- 如果没有组件则显示提示 -->
          Drop here
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 初始化一个2x2的数组来跟踪每个单元格的组件
      components: [[null, null], [null, null]],
    };
  },
  methods: {
    allowDrop(event) {
      event.preventDefault();
    },
    handleComponentDropped(row, col, event) {
      const componentData = JSON.parse(event.dataTransfer.getData('component'));
      // 当组件被拖放时更新components数组
      this.$set(this.components[row - 1], col - 1, componentData);
    },
    getComponentType(componentName) {
      // 根据传入的 componentName 返回对应的组件对象
      // 这里需要导入或定义一个对象映射组件名称到组件对象
      return componentName; // 这个示例暂时返回传入的组件名称字符串
    },
  }
};
</script>

<style>
.table-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.table-row {
  display: flex;
  gap: 10px;
}

.table-column {
  flex-grow: 1;
  border: 1px dashed #ccc;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
</style>
