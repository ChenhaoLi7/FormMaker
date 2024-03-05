<template>
  <div class="form-group">
    <label :for="fieldId">{{ label }}</label>
    <input
      :id="fieldId"
      type="email"
      class="form-control"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
    />
    <!-- 错误消息现在放置在输入框下方 -->
    <span v-if="invalidEmail && modelValue" class="error-message">请输入有效的电子邮件地址</span>
  </div>
</template>

<script>
export default {
  name: 'EmailInput',
  props: {
    fieldId: {
      type: String,
      required: true
    },
    label: String,
    placeholder: String,
    modelValue: String
  },
  data() {
    return {
      invalidEmail: false
    };
  },
  methods: {
    onInput(event) {
      const value = event.target.value;
      this.invalidEmail = !this.validateEmail(value);
      this.$emit('update:modelValue', value);
    },
    validateEmail(email) {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    }
  }
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem; /* 调整间距 */
}

.form-control {
  width: 100%;
  padding: 0.5rem; /* 增加内边距 */
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 10px; /* 增加圆角效果 */
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

label {
  display: block;
  margin-bottom: 0.5rem; /* 增加标签与输入框的间距 */
}

.error-message {
  display: block; /* 使错误消息成为块级元素 */
  margin-top: 0.25rem;
  color: red;
  font-size: 0.875rem;
}
</style>
