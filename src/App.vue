<template>
  
   
    <aside class="toolbox">
      <ToolboxContainer /> <!-- 工具箱组件 -->
    </aside>
    <main class="canvas">
      <!-- 这里将成为画布放置区，您可以通过拖放添加组件 -->
      <Canvas /> <!-- 假设您有一个名为 Canvas 的组件 -->
    </main>
    <aside class="properties">
      <PropertiesPanel /> <!-- 假设您有一个名为 PropertiesPanel 的组件用于属性配置 -->
    </aside>
  
</template>

<script>
import ToolboxContainer from './components/ToolBox/ToolboxContainer.vue';
import Canvas from './components/FormCanvas.vue'; 
import PropertiesPanel from './components/property-panel/PropertyPanel.vue'; 

export default {
  name: 'App',
  components: {
    ToolboxContainer,
    Canvas,
    PropertiesPanel
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
  background-color: #f4f4f4;
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
