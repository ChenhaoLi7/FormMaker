<template>
  <div class="date-picker-overlay" v-if="show">
    <div class="date-picker">
      <div class="date-picker-content">
        <input type="date" v-model="selectedDate" @input="updateDate" class="date-input">
      </div>
      <div class="date-picker-footer">
        <button class="date-picker-button" @click="cancel">Cancel</button>
        <button class="date-picker-button" @click="confirm">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      selectedDate: new Date().toISOString().substr(0, 10), // set today's date by default
    };
  },
  methods: {
    updateDate(event) {
      this.selectedDate = event.target.value;
    },
    cancel() {
      this.show = false;
      this.$emit('cancel');
    },
    confirm() {
      this.show = false;
      this.$emit('confirm', this.selectedDate);
    }
  }
};
</script>

<style scoped>
.date-picker-overlay {
  /* Same styles as time-picker-overlay */
}

.date-picker {
  /* Same styles as time-picker */
}

.date-picker-content {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.date-input {
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin-bottom: 10px;
}

.date-picker-footer {
  
}

.date-picker-button {
 
}
</style>
