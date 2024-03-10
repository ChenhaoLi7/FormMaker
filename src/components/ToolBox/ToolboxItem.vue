<template>
  <div class="toolbox-item" draggable="true" @dragstart="onDragStart">
    <component :is="getIconComponent(icon)" class="icon" />
    <span>{{ label }}</span>
  </div>
</template>

<script>
import EmailIcon from 'vue-material-design-icons/Email.vue';
import PhoneIcon from 'vue-material-design-icons/Phone.vue';
import WebIcon from 'vue-material-design-icons/Web.vue';
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue';
import IdCardIcon from 'vue-material-design-icons/IdCard.vue';
import TextIcon from 'vue-material-design-icons/Text.vue';
import FormTextareaIcon from 'vue-material-design-icons/FormTextarea.vue';
import NumericIcon from 'vue-material-design-icons/Numeric.vue';
import RadioIcon from 'vue-material-design-icons/Radio.vue';
import CheckboxMarkedIcon from 'vue-material-design-icons/CheckboxMarked.vue';
import SelectionIcon from 'vue-material-design-icons/Selection.vue';
import TimerSettingsIcon from 'vue-material-design-icons/TimerSettings.vue';
import CalendarIcon from 'vue-material-design-icons/Calendar.vue';
import RateIcon from 'vue-material-design-icons/Rate.vue';
import SwitchIcon from 'vue-material-design-icons/Switch.vue';
import SliderIcon from 'vue-material-design-icons/Slider.vue';
import FileIcon from 'vue-material-design-icons/File.vue';
import SignatureIcon from 'vue-material-design-icons/Signature.vue';
import RichTextIcon from 'vue-material-design-icons/RichText.vue';
import GridIcon from 'vue-material-design-icons/Grid.vue';
import TableIcon from 'vue-material-design-icons/Table.vue';
import TabsIcon from 'vue-material-design-icons/Tabs.vue';
import CollapseIcon from 'vue-material-design-icons/Collapse.vue';
import DividerIcon from 'vue-material-design-icons/Divider.vue';
import SubFormIcon from 'vue-material-design-icons/SubForm.vue';

import { defaultProperties } from '@/config/defaultProps';


export default {
  props: {
    label: String,
    icon: String,
    isContainer: Boolean 
  },
  components: {
    EmailIcon,
    PhoneIcon,
    WebIcon,
    MapMarkerIcon,
    IdCardIcon,
    TextIcon,
    FormTextareaIcon,
    NumericIcon,
    RadioIcon,
    CheckboxMarkedIcon,
    SelectionIcon ,
    TimerSettingsIcon,
    CalendarIcon,
    RateIcon,
    SwitchIcon,
    SliderIcon,
    FileIcon,
    SignatureIcon,
    RichTextIcon,
    GridIcon,
    TableIcon,
    TabsIcon,
    CollapseIcon,
    DividerIcon,
    SubFormIcon,
  },
  methods: {
    onDragStart(event) {
      const ComponentType = this.label.replace(/\s+/g, '');
      
      //console.log(defaultProperties);
      const dragPayload = {
        type: ComponentType,
        isContainer: this.isContainer, 

        defaultProps:defaultProperties[ComponentType] || {}
      };
      event.dataTransfer.setData('application/json', JSON.stringify(dragPayload));
    },
    getIconComponent(iconName) {
      const icons = {
        EmailIcon,
        PhoneIcon,
        WebIcon,
        MapMarkerIcon,
        IdCardIcon,
        TextIcon,
        FormTextareaIcon,
        NumericIcon,
        RadioIcon,
        CheckboxMarkedIcon,
        SelectionIcon ,
        TimerSettingsIcon,
        CalendarIcon,
        RateIcon,
        SwitchIcon,
        SliderIcon,
        FileIcon,
        SignatureIcon,
        RichTextIcon,
        GridIcon,
        TableIcon,
        TabsIcon,
        CollapseIcon,
        DividerIcon,
        SubFormIcon,
      };
      return icons[iconName] || null;
    },
  },
};
</script>

<style scoped>
.toolbox-item {
  display: flex;
  align-items: center;
  justify-content: start; /* Aligns items to the start of the container */
  padding: 8px 16px; /* Reduced padding */
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 13px; /* Apple-like rounded corners */
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  cursor: grab;
  user-select: none;
  text-align: left; /* Align text to the left */
  width: 100%; /* Ensures the item expands to fill the column */
  box-sizing: border-box; /* Ensures padding is included in width */
}

.icon {
  width: 24px; /* Reduced size for icons */
  height: 24px; /* Reduced size for icons */
  margin-right: 8px; /* Adjust space between icon and label */
}

/* Additional styles for the label if needed */
</style>
