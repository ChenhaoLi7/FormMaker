<template>
  <div class="toolbox-container">
    <!-- Default Tools Section -->
    <details open>
      <summary>Default Tools</summary>
      <div class="toolbox-grid">
        <ToolboxItem v-for="tool in defaultTools" :key="tool.label" :label="tool.label" :icon="tool.icon" />
      </div>
    </details>

    <!-- Basic Field Section -->
    <details open>
      <summary>Basic Field</summary>
      <div class="toolbox-grid">
        <ToolboxItem v-for="tool in basicTools" :key="tool.label" :label="tool.label" :icon="tool.icon" />
      </div>
    </details>

    <!-- Advanced Field Section -->
    <details open>
      <summary>Advanced Field</summary>
      <div class="toolbox-grid">
        <ToolboxItem v-for="tool in advancedTools" :key="tool.label" :label="tool.label" :icon="tool.icon" />
      </div>
    </details>
  </div>
</template>

<script>
import ToolboxItem from './ToolboxItem.vue';

export default {
  components: {
    ToolboxItem,
  },
  data() {
    return {
      defaultTools: [
        { label: 'Email', icon: 'EmailIcon' },
        { label: 'Phone', icon: 'PhoneIcon' },
        { label: 'URL', icon: 'WebIcon' },
        { label: 'Region', icon: 'MapMarkerIcon' },
        { label: 'ID', icon: 'IdCardIcon' },

      ],
      basicTools: [
        // Add your basic tools here
        { label: 'Input', icon: 'TextIcon' },
        { label: 'Textarea', icon: 'FormTextareaIcon' },
        { label: 'Number', icon: 'NumericIcon' },
        { label: 'Radio', icon: 'RadioIcon' },
        { label: 'Checkbox', icon: 'CheckboxMarkedIcon' },
        { label: 'Select', icon: 'SelectionIcon' },
        { label: 'Time', icon: 'TimerSettingsIcon' },
        { label: 'Date', icon: 'CalendarIcon' },
        { label: 'Rate', icon: 'RateIcon' },
        { label: 'Switch', icon: 'SwitchIcon' },
        { label: 'Slider', icon: 'SliderIcon' },
        { label: 'File', icon: 'FileIcon' },
        { label: 'Signature', icon: 'SignatureIcon' },
        { label: 'RichText', icon: 'RichTextIcon' },

        
      ],advancedTools: [
        // Add your advance tools here
        { label: 'Grid', icon: 'GridIcon' },
        { label: 'Table', icon: 'TableIcon' },
        { label: 'Tabs', icon: 'TabsIcon' },
        { label: 'Collapse', icon: 'CollapseIcon' },
        { label: 'Divider', icon: 'DividerIcon' },
        { label: 'Sub-form', icon: 'SubFormIcon' },
        
        
      ],
    };
  }
};
</script>

<style scoped>


.toolbox-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* Two columns */
  gap: 10px;
  /* Spacing between items */
  max-width: 600px;
  /* Maximum width of the grid */
  margin: 0 auto;
  /* Centering the grid */
}

/* Additional styles */
</style>
