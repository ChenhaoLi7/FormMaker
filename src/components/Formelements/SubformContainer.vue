<template>
  <div class="subform-container">
    <!-- 使用本地副本 localChildren 渲染子组件 -->
    <div v-for="(child, index) in localChildren" :key="index" class="subform-item">
      <component :is="getComponentType(child.type)" v-bind="child.props"></component>
    </div>
    <!-- 点击克隆最后一个子组件 -->
    <button class="clone-button" @click="cloneComponent">Clone Component</button>
  </div>
</template>

<script>
export default {
  name: 'SubformContainer',
  props: {
    children: Array,
    getComponentType: Function,
  },
  data() {
    return {
      localChildren: [],
    };
  },
  watch: {
   
    children: {
      immediate: true, // 立即执行，以便于组件初始化时处理
      deep: true, // 深度监听，以便于监听数组和对象内部值的变化
      handler(newVal) {
        this.localChildren = newVal.map(child => ({...child}));
      },
    },
  },
  methods: {
    cloneComponent() {
      const lastIndex = this.localChildren.length - 1;
      if (lastIndex < 0) return;
      
      const clonedChild = { 
        ...this.localChildren[lastIndex], 
        id: Date.now() // 确保每个克隆的 child 有一个唯一的 id
      };
      this.localChildren.push(clonedChild);
    },
  },
};
</script>





<style scoped>
.subform-container {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.subform-item {
  margin-bottom: 10px;
}

.clone-button {
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  margin-top: 10px;
}

.clone-button:hover {
  background-color: #0051a3;
}
</style>
