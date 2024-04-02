<template>
  
   
    <aside class="toolbox">
      <ToolboxContainer /> 
    </aside>
    <main class="canvas">
      <Canvas /> 
    </main>
    <aside class="properties">
      <PropertiesPanel /> 
    </aside>
  
</template>

<script>
import { reactive, provide } from 'vue';
import ToolboxContainer from './components/ToolBox/ToolboxContainer.vue';
import Canvas from './components/FormCanvas.vue';
import PropertiesPanel from './components/property-panel/PropertyPanel.vue';

export default {
  name: 'App',
  components: {
    ToolboxContainer,
    Canvas,
    PropertiesPanel
  },
  setup() {
    // 定义响应式状态，包括当前选中的组件
    const state = reactive({
      selectedComponent: null,
    });

    // 定义一个方法，用于选中组件并更新状态
    function selectComponent(component) {
      state.selectedComponent = component;
    }

    // 使用 provide 提供 state 和 selectComponent 方法
    // 第一个参数是一个唯一标识符（通常是一个字符串或Symbol），第二个参数是要提供的响应式对象或方法
    provide('appState', state);
    provide('selectComponent', selectComponent);

    // 返回对象，使模板可以访问state（如果需要）
    return {
      state,
    };
  }
};
</script>


<style>


#app {

  display: grid;
  grid-template-areas:
    
    'toolbox main properties';
  grid-template-columns: 300px 1fr 240px; 
  grid-template-rows: auto 1fr; 
}



header {
  grid-area: header;
  /* 添加标题栏样式 */
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}

.toolbox {
  grid-area: toolbox;
  /* 添加侧边栏样式 */
  background-color: #bdcef9;
  padding: 10px;
  border-right: 1px solid #ccc;
}

.canvas {
  grid-area: main;
  
  background-color: #fff;
  padding: 10px;
}

.properties {
  grid-area: properties;
  
  background-color: #f4f4f4;
  padding: 10px;
  border-left: 1px solid #ccc;
}


</style>
