<template>
  <div class="radio-group">
    <label :for="fieldId">{{ label }}</label>
    <div class="radio-options">
      <div v-for="(option, index) in options" :key="index" class="radio-option">
        <input
          type="radio"
          :id="`${fieldId}-${option}`"
          :value="option"
          :name="fieldId"
          v-model="selectedOption"
          @change="emitChange"
        />
        <label :for="`${fieldId}-${option}`">{{ option }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioButton',
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
    value: String
  },
  data() {
    return {
      selectedOption: this.value
    };
  },
  methods: {
    emitChange() {
      this.$emit('input', this.selectedOption);
    }
  }
};
</script>

<style scoped>
.radio-group {
  margin-bottom: 1rem;
}

.radio-options {
  display: flex;
  flex-direction: column;
}

.radio-option {
  margin-bottom: 0.5rem;
}

input[type="radio"] {
  accent-color: #007aff;
}

.radio-option label {
  margin-left: 0.5rem;
}
</style>
