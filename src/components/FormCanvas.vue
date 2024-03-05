<template>
  <div class="canvas" @dragover.prevent="onDragOver" @drop="onDrop">
    <!-- 组件渲染区 -->
    <div v-for="(component, index) in components" :key="index" class="canvas-item">
      <!-- 动态组件渲染 -->
      <component :is="getComponentType(component.type)" :initial-props="component.props" />
    </div>
  </div>
</template>

<script>
import { reactive, defineComponent } from 'vue';

export default defineComponent({
  name: 'FormCanvas',
  components: {
    // 从 ToolboxItem.vue 导入所有基础表单组件
    // 假设您有相应的表单组件，如下所示：
    EmailComponent: () => import('./Formelements/EmailInput.vue'),
    PhoneComponent: () => import('./Formelements/PhoneInput.vue'),
    // ...其他表单组件
  },
  setup() {
    const state = reactive({
      components: [], // 存储画布上的组件及其属性
    });

     function onDragOver(event) {
      event.preventDefault();
     }

    function onDrop(event) {
      const label = event.dataTransfer.getData('text/plain');
      // 根据拖拽的标签来确定组件类型
      const type = label.replace(/\s+/g, '') + 'Component'; // 去除空格并添加 'Component' 后缀

      state.components.push({
        type: type,
        props: {}, // 可以根据需要设置默认属性
      });
    }

    function getComponentType(type) {
      // 根据 type 返回实际的组件
      return this.$options.components[type];
    }

    return {
      state,
      onDragOver,
      onDrop,
      getComponentType,
    };
  },
});
</script>


<style scoped>
.canvas {
  border: 1px solid #ccc;
  display: flex;
  min-height: 800px;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto; /* 允许垂直方向滚动 */
  /* 自定义滚动条样式 */
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: rgba(128, 128, 128, 0.5) transparent; /* Firefox */
}

/* Chrome, Edge, and Safari */
.canvas::-webkit-scrollbar {
  width: 12px; /* 滚动条宽度 */
}

.canvas::-webkit-scrollbar-track {
  background: transparent; /* 滚动条轨道颜色 */
}

.canvas::-webkit-scrollbar-thumb {
  background-color: rgba(128, 128, 128, 0.5); /* 滚动条颜色 */
  border-radius: 6px; /* 滚动条圆角 */
  border: 3px solid transparent; /* 滚动条边框 */
}

.canvas-item {
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  min-height: 50px;
}
</style>