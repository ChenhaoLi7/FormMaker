<template>
  <div class="dropdown-group">
    <label :for="fieldId">{{ label }}</label>
    <select
      :id="fieldId"
      class="dropdown-select"
      v-model="selectedOption"
      @change="onChange"
    >
      <option value="" disabled selected>请选择</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DropdownSelect',
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
    onChange() {
      this.$emit('input', this.selectedOption);
    }
  }
};
</script>

<style scoped>
.dropdown-group {
  margin-bottom: 1rem;
}

.dropdown-select {
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ced4da;
  background-color: #fff;
  -webkit-appearance: none;
  appearance: none;
}

/* 样式调整以符合苹果风格 */
</style>

