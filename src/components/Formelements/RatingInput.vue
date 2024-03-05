<template>
  <div class="rating">
    <label :for="fieldId">{{ label }}</label>
    <div class="stars">
      <!-- 生成五个星星，点击时会调用 setRating 方法 -->
      <span v-for="n in 5" :key="n" class="star" :class="{ 'selected': n <= rating }" @click="setRating(n)">
        ★
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatingInput',
  props: {
    fieldId: {
      type: String,
      required: true
    },
    label: String,
    value: Number
  },
  data() {
    return {
      rating: this.value || 0 // 默认没有评分
    };
  },
  methods: {
    setRating(n) {
      this.rating = n;
      this.$emit('update:rating', n); // 发出事件，以便 v-model 可以更新
    }
  }
};
</script>

<style scoped>
.rating {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.stars {
  display: inline-flex;
  font-size: 2rem;
}

.star {
  cursor: pointer;
  color: #fff; /* 星星颜色为白色 */
  text-shadow: 0 0 2px #000; /* 添加黑色的文字阴影来模拟边框效果 */
  transition: color 0.2s ease, text-shadow 0.2s ease;
}

.star.selected {
  color: #ffd055; /* 评分后星星颜色改为黄色 */
  text-shadow: none; /* 选中时移除文字阴影 */
}

.star:hover {
  color: #ffd055; /* 鼠标悬停时星星颜色变为黄色 */
}
</style>
