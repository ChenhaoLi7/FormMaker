<template>
  <div class="form-group">
    <label :for="fieldId">{{ label }}</label>
    <input
      :id="fieldId"
      class="form-control"
      type="text" 
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
    />
    <span v-if="invalidUrl" class="error-message">
      请输入有效的网址，如 https://www.example.com
    </span>
  </div>
</template>

<script>
export default {
  name: 'UrlInput',
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
      invalidUrl: false,
      inputTimeout: null
    };
  },
  methods: {
    onInput(event) {
      const value = event.target.value;
      this.$emit('update:modelValue', value);
      // 清除之前的定时器
      clearTimeout(this.inputTimeout);
      // 创建一个新的定时器
      this.inputTimeout = setTimeout(() => {
        this.validateUrl(value);
      }, 800); // 延迟验证，给用户更多输入时间
    },
    validateUrl(url) {
      // 更宽松的验证逻辑，允许用户输入不带协议的网址
      const pattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([/\w .-]*)*\/?$/;
      this.invalidUrl = url.length > 0 && !pattern.test(url);
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
  padding: 0.75rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 15px; /* 更大的圆角 */
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-control:focus {
  border-color: #adadad; /* 淡化的焦点颜色 */
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.error-message {
  display: block;
  margin-top: 0.5rem;
  color: #ff6b6b; /* 明亮的错误颜色 */
  font-size: 0.875rem;
}
</style>
