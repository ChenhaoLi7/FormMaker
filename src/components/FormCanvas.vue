<template>
  <pre>{{ state.components }}</pre>
  <div class="canvas" @dragover.prevent="onDragOver" @drop="onDrop">
    <div v-for="component in state.components" :key="component.id" class="canvas-item"
      :ref="component.isContainer ? setContainerRef : null" :data-container-id="component.id">

      <component v-if="!component.isContainer" :is="getComponentType(component.type)" v-bind="component.props">
      </component>

      <component v-if="component.isContainer && getComponentType(component.type)" 
        :is="getComponentType(component.type)"
        :children="component.children" 
        :getComponentType="getComponentType"
        v-bind="component.props">
      </component>

    </div>
  </div>
</template>


<script>
import { reactive, defineComponent, defineAsyncComponent, onMounted, ref } from 'vue';

const EmailComponent = defineAsyncComponent(() => import('./Formelements/EmailInput.vue'));
const PhoneComponent = defineAsyncComponent(() => import('./Formelements/PhoneInput.vue'));
const URLComponent = defineAsyncComponent(() => import('./Formelements/UrlInput.vue'));
const RegionComponent = defineAsyncComponent(() => import('./Formelements/RegionSelector.vue'));
const IDComponent = defineAsyncComponent(() => import('./Formelements/IdentityCardInput.vue'));
const InputComponent = defineAsyncComponent(() => import('./Formelements/TextInput.vue'));
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
const GridComponent = defineAsyncComponent(() => import('./Formelements/grid/GridContainer.vue'));
const GridColumn = defineAsyncComponent(() => import('./Formelements/grid/GridColumn.vue'));
const GridRow = defineAsyncComponent(() => import('./Formelements/grid/GridRow.vue'));
const TableComponent = defineAsyncComponent(() => import('./Formelements/Table/TableContainer.vue'));


export default defineComponent({
  name: 'FormCanvas',

  setup() {
    const state = reactive({
      components: [],
    });

    const containerRefs = ref(new Map());

    function onDragOver(event) {
      event.preventDefault();
    }

    function onDrop(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      event.preventDefault();
      const dataString = event.dataTransfer.getData('application/json');
      const data = JSON.parse(dataString);



      const newComponent = {
        id: Date.now(),
        type: data.type + 'Component',
        isContainer: data.isContainer,
        props: data.defaultProps || {},
        children: data.isContainer ? [] : undefined,
      };

      for (const container of state.components.filter(c => c.isContainer)) {

        console.log("containerRef", containerRefs.value);
        console.log("type", container.type);
        for (const [id, element] of containerRefs.value.entries()) {
          console.log("打印", id, element);




          const rect = element.getBoundingClientRect();
          if (mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom) {
            container.children.push(newComponent);
            return;
          }

        }

      }

      state.components.push(newComponent);
    }

    function setContainerRef(el) {
      if (el) {
        const id = el.dataset.containerId;
        containerRefs.value.set(id, el);
      }
    }

    onMounted(() => {

      containerRefs.value.clear();
    });
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
      SubformComponent,
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
      setContainerRef,
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
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(128, 128, 128, 0.5) transparent;

}


.canvas::-webkit-scrollbar {
  width: 12px;

}

.canvas::-webkit-scrollbar-track {
  background: transparent;

}

.canvas::-webkit-scrollbar-thumb {
  background-color: rgba(128, 128, 128, 0.5);
  border-radius: 6px;
  border: 3px solid transparent;

}

.canvas-item {
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  min-height: 50px;
}
</style>
