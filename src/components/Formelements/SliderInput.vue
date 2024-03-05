<template>
  <div class="slider-container">
    <label :for="fieldId">{{ label }}</label>
    <div class="slider-wrapper">
      <input
        type="range"
        :id="fieldId"
        :value="modelValue"
        @input="updateValue($event.target.value)"
        ref="slider"
        min="0"
        max="100"
        class="slider"
      />
      <div class="slider-bg" :style="{ width: `${percentage}%` }"></div>
    </div>
    <div class="value-display">Selected Value: {{ modelValue }}</div>
  </div>
</template>

<script>
export default {
  name: 'SliderInput',
  props: {
    fieldId: {
      type: String,
      required: true
    },
    label: String,
    modelValue: Number
  },
  computed: {
    percentage() {
      return (this.modelValue / 100) * 100;
    }
  },
  methods: {
    updateValue(value) {
      const numberValue = Number(value);
      this.$emit('update:modelValue', numberValue);
    }
  }
};
</script>

<style scoped>
.slider-container {
  margin: 20px;
  text-align: left;
}

.slider-wrapper {
  position: relative;
  padding: 0;
  margin: 10px 0;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: transparent;
  outline: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #007aff;
  cursor: pointer;
  border: 1px solid #007aff;
}

.slider-bg {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 5px;
  background-color: #007aff;
  border-radius: 5px;
  transition: width 0.2s ease-in-out;
}

.value-display {
  margin-top: 10px;
  font-size: 1rem;
}

/* Firefox styles */
.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #007aff;
  cursor: pointer;
  border: none;
}

.slider::-moz-range-track {
  height: 5px;
  border-radius: 5px;
  background: transparent;
}
</style>
