<template>
  <div class="accordion">
    <div v-for="(panel, index) in panels" :key="panel.id" class="panel">
      <button class="accordion-header" @click="togglePanel(index)">
        {{ panel.name }}
        <span class="icon">{{ isOpen(index) ? '▼' : '▶' }}</span>
      </button>
      <transition name="fade">
        <div class="accordion-content" v-show="isOpen(index)">
          <component v-if="children[index]" :is="getComponentType(children[index].type)"
            v-bind="children[index].props" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    panels: Array, 
    children: Array,
    getComponentType: Function,
  },
  data() {
    return {
      activePanelIndex: null, 
    };
  },
  methods: {
    togglePanel(index) {
      this.activePanelIndex = this.activePanelIndex === index ? null : index;
    },
    isOpen(index) {
      return this.activePanelIndex === index;
    },
  }
};
</script>

<style scoped>
.accordion-header {
  background-color: #f5f5f5;
  color: #333; 
  padding: 10px 15px; 
  margin: 5px 0; 
  cursor: pointer; 
  border: none; 
  width: 100%; 
  text-align: left; 
  outline: none; 
  transition: background-color 0.3s; 
}

.accordion-header:hover {
  background-color: #eaeaea; 
}

.accordion-content {
  padding: 20px; 
  border: 1px solid #ccc;
  border-top: none; 
  /* display: none;  */
}

.icon {
  float: right; 
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s; 
}

.fade-enter, .fade-leave-to  {
  opacity: 0; 
}
</style>
