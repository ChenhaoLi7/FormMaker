<template>
  <div class="canvas" @dragover.prevent="onDragOver" @drop="onDrop">
    <div v-for="component in state.components" :key="component.id" class="canvas-item">
      <component :is="getComponentType(component.type)" v-bind="component.props"></component>
    </div>
  </div>
</template>


<script>
import { reactive, defineComponent, defineAsyncComponent } from 'vue';

const EmailComponent = defineAsyncComponent(() => import('./Formelements/EmailInput.vue'));
const PhoneComponent = defineAsyncComponent(() => import('./Formelements/PhoneInput.vue'));
const URLComponent = defineAsyncComponent(() => import('./Formelements/UrlInput.vue'));
const RegionComponent = defineAsyncComponent(() => import('./Formelements/RegionSelector.vue'));
const IDComponent = defineAsyncComponent(() => import('./Formelements/IdentityCardInput.vue'));
const InputComponent=defineAsyncComponent(() => import('./Formelements/TextInput.vue'));
const TextareaComponent = defineAsyncComponent(() => import('./Formelements/TextareaInput.vue'));
const NumberComponent = defineAsyncComponent(() => import('./Formelements/NumberInput.vue'));
const RadioComponent = defineAsyncComponent(() => import('./Formelements/RadioButton.vue'));
const CheckboxComponent = defineAsyncComponent(() => import('./Formelements/CheckBox.vue'));
const SelectComponent = defineAsyncComponent(() => import('./Formelements/DropdownSelect.vue'));
const TimeComponent = defineAsyncComponent(() => import('./Formelements/TimePicker.vue'));
const DateComponent = defineAsyncComponent(() => import('./Formelements/DatePicker.vue'));
const RateComponent = defineAsyncComponent(() => import('./Formelements/RatingInput.vue'));
const SwitchComponent = defineAsyncComponent(() => import('./Formelements/ToggleSwitch.vue'));
const SliderComponent = defineAsyncComponent(() => import('./Formelements/SliderInput.vue'));
const FileComponent = defineAsyncComponent(() => import('./Formelements/FileUpload.vue'));
const SignatureComponent = defineAsyncComponent(() => import('./Formelements/SignatureComponent.vue'));
const RichTextComponent = defineAsyncComponent(() => import('./Formelements/RichTextEditor.vue'));
const DividerComponent = defineAsyncComponent(() => import('./Formelements/AppDivider.vue'));
const TabsComponent = defineAsyncComponent(() => import('./Formelements/TabsContainer.vue'));
const SubformComponent = defineAsyncComponent(() => import('./Formelements/SubformContainer.vue'));
const CollapseComponent = defineAsyncComponent(() => import('./Formelements/AccordionPanel.vue'));
const GridComponent= defineAsyncComponent(() => import('./Formelements/grid/GridContainer.vue'));
const GridColumn= defineAsyncComponent(() => import('./Formelements/grid/GridColumn.vue'));
const GridRow= defineAsyncComponent(() => import('./Formelements/grid/GridRow.vue'));
const TableComponent= defineAsyncComponent(() => import('./Formelements/Table/TableContainer.vue'));


export default defineComponent({
  name: 'FormCanvas',
  
  setup() {
    const state = reactive({
      components: [], 
    });

     function onDragOver(event) {
      event.preventDefault();
     }

    function onDrop(event) {
      // 阻止默认行为以允许放置
      event.preventDefault();

      // 从拖拽事件中获取传输的数据
      const dataString = event.dataTransfer.getData('application/json');
      const data = JSON.parse(dataString);
      console.log(data);

      // 从数据中解析出组件类型和其他属性
      const newComponent = {
        id: Date.now(),
        type: data.type + 'Component', 
        isContainer: data.isContainer,
        props: data.defaultProps || {}, 
        children: data.isContainer ? [] : undefined, // 如果是容器，则初始化children数组
      };

      // 如果是放置到容器组件内，实现一些逻辑来确定放置位置
      // 比如使用鼠标坐标与画布上已有组件的坐标进行比较等
      // 先假设所有组件都是平级放置的，因此直接推入数组中
      console.log(newComponent); 
      state.components.push(newComponent);
    }
    const componentMap = {
      EmailComponent,
      PhoneComponent,
      URLComponent,
      RegionComponent,
      IDComponent,
      InputComponent,
      TextareaComponent,
      NumberComponent,
      RadioComponent,
      CheckboxComponent,
      SelectComponent,
      TimeComponent,
      DateComponent,
      RateComponent,
      SwitchComponent,
      SliderComponent,
      FileComponent,
      SignatureComponent,
      RichTextComponent,
      DividerComponent,
      TabsComponent,
      SubformComponent ,
      CollapseComponent,
      GridComponent,
      GridColumn,
      TableComponent,
      GridRow,

      
    };
    function getComponentType(type) {
      return componentMap[type] || null;
    }

    return {
      state,
      onDragOver,
      onDrop,
      getComponentType,
    };
  },
});
</script>


<style scoped>
.canvas {
  border: 1px solid #ccc;
  display: flex;
  min-height: 800px;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto; /* 允许垂直方向滚动 */
  /* 自定义滚动条样式 */
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: rgba(128, 128, 128, 0.5) transparent; /* Firefox */
}

/* Chrome, Edge, and Safari */
.canvas::-webkit-scrollbar {
  width: 12px; /* 滚动条宽度 */
}

.canvas::-webkit-scrollbar-track {
  background: transparent; /* 滚动条轨道颜色 */
}

.canvas::-webkit-scrollbar-thumb {
  background-color: rgba(128, 128, 128, 0.5); /* 滚动条颜色 */
  border-radius: 6px; /* 滚动条圆角 */
  border: 3px solid transparent; /* 滚动条边框 */
}

.canvas-item {
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  min-height: 50px;
}
</style>