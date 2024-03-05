<template>
  <div class="dynamic-form-container">
    <div v-for="(item, index) in localItems" :key="item.key" class="component-wrapper">
      <component :is="item.component" v-bind="item.props"></component>
    </div>
    <button @click="addItem">Add New Component</button>
  </div>
</template>

<script>
export default {
  name: 'DynamicFormContainer',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // 使用本地数据复制props以避免直接修改props
      localItems: JSON.parse(JSON.stringify(this.items))
    };
  },
  methods: {
    addItem() {
      // 假设添加的是最后一个组件的复制，这里需要根据实际情况调整
      const lastItem = this.localItems[this.localItems.length - 1];
      const newItem = { ...lastItem, key: Date.now() }; // 使用新的key
      this.localItems.push(newItem);
    }
  },
  watch: {
    // 监听props的变化，以更新本地数据
    items: {
      deep: true,
      handler(newVal) {
        this.localItems = JSON.parse(JSON.stringify(newVal));
      }
    }
  }
};
</script>

<style scoped>
.dynamic-form-container {
  /* 添加容器的样式 */
}

.component-wrapper {
  margin-bottom: 10px;
  /* 添加组件包装器的样式 */
}

/* 添加更多样式 */
</style>
