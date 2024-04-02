<template>
  <div class="grid-container">
    <div v-for="(row, rowIndex) in rows" :key="`row-${rowIndex}`" class="grid-row">
      <div v-for="(column, columnIndex) in row.columns" :key="`col-${rowIndex}-${columnIndex}`" class="grid-column">
        <div v-for="(child, index) in children" :key="child.id">
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
  name: 'GridContainer',
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
  

});

</script>

<style>
.grid-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding: 10px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  overflow: hidden;
}

.grid-row {
  display: flex;
  gap: 10px;
}

.grid-column {
  flex-grow: 1;
  border: 1px dashed #ccc;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
</style>