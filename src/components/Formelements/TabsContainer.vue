<template>
  <div class="tabs-container">
    <ul class="tabs">
      <li
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ active: tab.id === activeTab }"
        @click="activeTab = tab.id"
      >
        {{ tab.name }}
      </li>
    </ul>
    <div class="tabs-content">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ 'content-active': tab.id === activeTab }"
        @drop="handleDrop"
        @dragover.prevent
      >
        <!-- 拖放内容将会在这里显示 -->
        {{ tab.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
      tabs: [
        { id: 1, name: 'Tab 1', content: 'Drop here' },
        { id: 2, name: 'Tab 2', content: 'Drop here' },
        { id: 3, name: 'Tab 3', content: 'Drop here' },
        { id: 4, name: 'Tab 4', content: 'Drop here' },
        { id: 5, name: 'Tab 5', content: 'Drop here' },
      ],
    };
  },
  methods: {
    handleDrop(event) {
      const data = event.dataTransfer.getData('text');
      // 在这里处理拖放逻辑
      // 例如更新当前激活标签的内容
      this.tabs.find(tab => tab.id === this.activeTab).content = data;
    },
  },
};
</script>

<style scoped>
.tabs-container {
  /* 样式调整以匹配您的模板 */
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

.content-active {
  display: block;
}

.tabs-content > div {
  display: none;
}

.tabs-content > .content-active {
  display: block;
}
</style>
