<template>
  <div class="time-picker-overlay" v-if="show">
    <div class="time-picker">
      <div class="time-picker-header">
        <button class="time-picker-button" @click="cancel">Cancel</button>
        <button class="time-picker-button" @click="confirm">OK</button>
      </div>
      <div class="time-picker-content">
        <!-- Hours -->
        <div class="time-column">
          <div
            class="time-item"
            v-for="hour in hours"
            :key="hour"
            :class="{ selected: hour === selectedHour }"
            @click="selectHour(hour)"
          >
            {{ hour }}
          </div>
        </div>
        <!-- Minutes -->
        <div class="time-column">
          <div
            class="time-item"
            v-for="minute in minutes"
            :key="minute"
            :class="{ selected: minute === selectedMinute }"
            @click="selectMinute(minute)"
          >
            {{ minute }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      selectedHour: '00',
      selectedMinute: '00',
      hours: Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0')),
      minutes: Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')),
    };
  },
  methods: {
    selectHour(hour) {
      this.selectedHour = hour;
    },
    selectMinute(minute) {
      this.selectedMinute = minute;
    },
    cancel() {
      this.show = false;
      this.$emit('cancel');
    },
    confirm() {
      this.show = false;
      this.$emit('confirm', `${this.selectedHour}:${this.selectedMinute}`);
    }
  }
};
</script>

<style scoped>
.time-picker-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
}

.time-picker {
  background: white;
  border-radius: 15px;
  overflow: hidden;
}

.time-picker-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f2f2f7;
}

.time-picker-button {
  padding: 5px 15px;
  border: none;
  background: none;
}

.time-picker-content {
  display: flex;
}

.time-column {
  flex: 1;
  overflow-y: scroll;
  height: 150px; /* Adjust as necessary */
}

.time-item {
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
}

.selected {
  background-color: #007aff;
  color: white;
}
</style>
