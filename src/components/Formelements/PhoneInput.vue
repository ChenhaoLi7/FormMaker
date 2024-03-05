<template>
  <div class="form-group">
    <label :for="fieldId">{{ label }}</label>
    <input
      :id="fieldId"
      class="form-control"
      type="tel"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      pattern="[0-9]*"
      inputmode="numeric"
    />
    <!-- 显示错误消息 -->
    <span v-if="invalidPhone" class="error-message">
      请输入有效的手机号码
    </span>
  </div>
</template>

<script>
export default {
  name: 'PhoneInput',
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
      invalidPhone: false
    };
  },
  methods: {
    onInput(event) {
      const value = event.target.value;
      // 这是一个非常基础的手机号码验证，您可能需要根据具体情况调整正则表达式
      const phonePattern = /^\+?(\d{10,15})$/;
      this.invalidPhone = !phonePattern.test(value);
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
  box-shadow: 0 0 0 0.2rem rgba(0
, 123, 255, 0.25);
}

label {
display: block;
margin-bottom: 0.5rem;
}

.error-message {
display: block;
margin-top: 0.25rem;
color: red;
font-size: 0.875rem;
}
</style>