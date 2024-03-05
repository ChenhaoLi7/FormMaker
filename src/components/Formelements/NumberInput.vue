<template>
  <div class="form-group">
    <label :for="fieldId">{{ label }}</label>
    <input
      :id="fieldId"
      class="form-control"
      type="number"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      :min="min"
      :max="max"
      :step="step"
    />
  </div>
</template>

<script>
export default {
  name: 'NumberInput',
  props: {
    fieldId: {
      type: String,
      required: true
    },
    label: String,
    placeholder: String,
    modelValue: Number,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    }
  },
  methods: {
    onInput(event) {
      const value = parseFloat(event.target.value);
      this.$emit('update:modelValue', value);
    }
  }
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1.5rem;
}

.form-control {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 10px; /* 圆角风格 */
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  border-color: #80bdff;
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

label {
  display: block;
  margin-bottom: 0.5rem;
}
</style>
