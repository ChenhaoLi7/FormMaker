<template>
  <div class="accordion">
    <div v-for="(panel, index) in panels" :key="panel.name" class="panel">
      <button class="accordion-header" @click="togglePanel(index)">
        {{ panel.name }}
        <span class="icon">{{ panel.isOpen ? '▼' : '▶' }}</span>
      </button>
      <transition name="fade">
        <div class="accordion-content" v-if="panel.isOpen">
          <div class="drop-area" v-if="!panel.content" @drop="handleDrop(panel, $event)" @dragover.prevent>
            Drop here
          </div>
          <div v-else>
            {{ panel.content }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionPanel',
  data() {
    return {
      panels: [
        { name: 'Tab 1', content: '', isOpen: false },
        { name: 'Tab 2', content: '', isOpen: false },
        { name: 'Tab 3', content: '', isOpen: false },
      ],
    };
  },
  methods: {
    togglePanel(index) {
      this.panels[index].isOpen = !this.panels[index].isOpen;
    },
    handleDrop(panel, event) {
      const data = event.dataTransfer.getData('text');
      panel.content = data;
    },
  },
};
</script>

<style scoped>
.accordion-header {
  /* 样式 */
  background-color: #f5f5f5;
  border: none;
  padding: 10px;
  text-align: left;
  width: 100%;
  cursor: pointer;
}

.accordion-content {
  padding: 10px;
  border: 1px solid #ccc;
  border-top: none;
}

.drop-area {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
}

.icon {
  float: right;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
