<template>
  <div class="checkbox-group">
    <label :for="fieldId" class="group-label">{{ label }}</label>
    <div class="checkbox-options">
      <div v-for="(option, index) in options" :key="index" class="checkbox-option">
        <input
          type="checkbox"
          :id="`${fieldId}-${option}`"
          :value="option"
          :checked="isSelected(option)"
          @change="onCheckboxChange(option, $event)"
        />
        <label :for="`${fieldId}-${option}`">{{ option }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  props: {
    fieldId: {
      type: String,
      required: true
    },
    label: String,
    options: {
      type: Array,
      required: true
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    isSelected(option) {
      return this.value.includes(option);
    },
    onCheckboxChange(option, event) {
      let newValue = [...this.value];
      if (event.target.checked) {
        newValue.push(option);
      } else {
        newValue = newValue.filter(item => item !== option);
      }
      this.$emit('input', newValue);
    }
  }
};
</script>

<style scoped>
.checkbox-group {
  margin-bottom: 1rem;
}

.group-label {
  display: block;
  margin-bottom: 0.5rem;
}

.checkbox-options {
  display: flex;
  flex-direction: column;
}

.checkbox-option {
  margin-bottom: 0.5rem;
  align-items: center;
  display: flex;
}

.checkbox-option input[type="checkbox"] {
  accent-color: #007aff;
  margin-right: 0.5rem;
}

/* 根据需要调整样式 */
</style>

