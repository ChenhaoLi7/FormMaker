<template>
  <div class="form-group">
    <label :for="fieldId">{{ label }}</label>
    <textarea
      :id="fieldId"
      class="textarea-input"
      :placeholder="placeholder"
      :rows="rows"
      v-model="text"
    />
  </div>
</template>

<script>
export default {
  name: 'TextareaInput',
  props: {
    fieldId: {
      type: String,
      required: true
    },
    label: String,
    placeholder: String,
    rows: {
      type: Number,
      default: 3
    },
    value: String
  },
  data() {
    return {
      text: this.value
    };
  },
  watch: {
    text(newVal) {
      this.$emit('input', newVal);
    },
    value(newVal) {
      this.text = newVal;
    }
  }
};
</script>

<style scoped>
.textarea-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  margin-top: 5px;
  font-family: inherit;
  font-size: inherit;
}

.form-group {
  display: flex;
  flex-direction: column;
}
</style>
