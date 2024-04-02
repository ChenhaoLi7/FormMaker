<template>
  <div class="tabs-container">
  
    <ul class="tabs">
      <li v-for="tab in tabs" :key="tab.id" :class="{ active: tab.id === activeTab }" @click="changeTab(tab.id)">
        {{ tab.name }}
      </li>
    </ul>
    <div class="tabs-content">
      <component v-for="child in activeTabChildren" :key="child.id" :is="getComponentType(child.type)"
        v-bind="child.props" />


    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: Array,
    children: Array,
    getComponentType: Function,
  },
  data() {
    return {
      activeTab: 1,
    };
  },
  computed: {
    activeTabChildren() {
      const child = this.children[this.activeTab - 1];
      return child ? [child] : [];
    }
  },

  methods: {
    changeTab(tabId) {
      this.activeTab = tabId;
    },
  }
};
</script>


<style scoped>
.tabs-container {
  /* 你的容器样式 */
}

.tabs {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  background: #f5f5f5;
  margin: 0;
}

.tabs li {
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
}

.tabs li.active {
  border-bottom: 3px solid blue;
}

.tabs-content {
  border: 1px solid #ccc;
  padding: 20px;
}


</style>
