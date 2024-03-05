<template>
  <div class="toggle-switch">
    <input
      :id="fieldId"
      type="checkbox"
      v-model="checked"
      @change="toggleSwitch"
      class="toggle-input"
    />
    <label :for="fieldId" class="toggle-label"></label>
  </div>
</template>

<script>
export default {
  name: 'ToggleSwitch',
  props: {
    fieldId: {
      type: String,
      required: true
    },
    label: String,
    value: Boolean
  },
  data() {
    return {
      checked: this.value || false
    };
  },
  methods: {
    toggleSwitch() {
      this.$emit('update:value', this.checked);
    }
  }
};
</script>

<style scoped>
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.toggle-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-label {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 24px;
}

.toggle-label:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

.toggle-input:checked + .toggle-label {
  background-color: #2196F3;
}

.toggle-input:focus + .toggle-label {
  box-shadow: 0 0 1px #2196F3;
}

.toggle-input:checked + .toggle-label:before {
  transform: translateX(26px);
}
</style>
