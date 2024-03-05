
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
      @blur="onBlur"
    />
    <span v-if="invalidId" class="error-message">
      请输入有效的身份证号码
    </span>
  </div>
</template>

<script>
export default {
  name: 'IdentityCardInput',
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
      invalidId: false
    };
  },
  methods: {
    onInput(event) {
      // 实时更新值
      this.$emit('update:modelValue', event.target.value);
    },
    onBlur() {
      // 当输入框失去焦点时进行验证
      this.invalidId = !this.validateId(this.modelValue);
    },
    validateId(id) {
      // 简单的身份证号验证逻辑，仅作为示例
      const pattern = /^[1-9]\d{5}(18|19|20)?\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}(\d|[xX])$/;
      return pattern.test(id);
    }
  }
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 15px; /* 圆角效果 */
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-control:focus {
  border-color: #adadad;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.error-message {
  display: block;
  margin-top: 0.25rem;
  color: #ff6b6b;
  font-size: 0.875rem;
}
</style>
