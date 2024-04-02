<template>
  <div class="table-container">
    <div v-for="(row, rowIndex) in rows" :key="`row-${rowIndex}`" class="table-row">
      <div v-for="(column, columnIndex) in row.columns" :key="`col-${rowIndex}-${columnIndex}`" class="table-column">
        <div v-for="(child, index) in children" :key="child.id">
          <!-- 确保只渲染属于当前列的组件 -->
          <component v-if="index === rowIndex * row.columns.length + columnIndex" :is="getComponentType(child.type)"
            v-bind="child.props">
          </component>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TableContainer',
  props: {
    rows: Array,
    children: Array,
    getComponentType: Function,
  },
  setup(props) {
    return {
      internalRows: props.rows,
    };
  },
  computed: {
    debugRows() {
      console.log('Rows data:', this.rows);
      return this.rows;
    },
    debugChildren() {
      console.log('Children data:', this.children);
      return this.children;
    }
  }

});

</script>

<style>
.table-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding: 10px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  overflow: hidden;
}

.table-row {
  display: flex;
  gap: 10px;
}

.table-column {
  flex-grow: 1;
  border: 1px dashed #ccc;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
</style>