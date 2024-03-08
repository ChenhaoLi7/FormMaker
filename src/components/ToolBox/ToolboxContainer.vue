<template>
  <div class="toolbox-container">
    <!-- Default Tools Section -->
    <details open>
      <summary>Default Tools</summary>
      <div class="toolbox-grid">
        <ToolboxItem v-for="tool in defaultTools" :key="tool.label" :label="tool.label" :icon="tool.icon" :isContainer="tool.isContainer" />
      </div>
    </details>

    <!-- Basic Field Section -->
    <details open>
      <summary>Basic Field</summary>
      <div class="toolbox-grid">
        <ToolboxItem v-for="tool in basicTools" :key="tool.label" :label="tool.label" :icon="tool.icon" :isContainer="tool.isContainer"/>
      </div>
    </details>

    <!-- Advanced Field Section -->
    <details open>
      <summary>Advanced Field</summary>
      <div class="toolbox-grid">
        <ToolboxItem v-for="tool in advancedTools" :key="tool.label" :label="tool.label" :icon="tool.icon" :isContainer="tool.isContainer" />
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
        { label: 'Email', icon: 'EmailIcon', isContainer: false },
        { label: 'Phone', icon: 'PhoneIcon' , isContainer: false},
        { label: 'URL', icon: 'WebIcon' , isContainer: false},
        { label: 'Region', icon: 'MapMarkerIcon', isContainer: false },
        { label: 'ID', icon: 'IdCardIcon' , isContainer: false},

      ],
      basicTools: [
        // Add your basic tools here
        { label: 'Input', icon: 'TextIcon', isContainer: false },
        { label: 'Textarea', icon: 'FormTextareaIcon', isContainer: false },
        { label: 'Number', icon: 'NumericIcon' , isContainer: false},
        { label: 'Radio', icon: 'RadioIcon', isContainer: false },
        { label: 'Checkbox', icon: 'CheckboxMarkedIcon', isContainer: false },
        { label: 'Select', icon: 'SelectionIcon', isContainer: false },
        { label: 'Time', icon: 'TimerSettingsIcon', isContainer: false },
        { label: 'Date', icon: 'CalendarIcon' , isContainer: false},
        { label: 'Rate', icon: 'RateIcon', isContainer: false },
        { label: 'Switch', icon: 'SwitchIcon' , isContainer: false},
        { label: 'Slider', icon: 'SliderIcon' , isContainer: false},
        { label: 'File', icon: 'FileIcon', isContainer: false },
        { label: 'Signature', icon: 'SignatureIcon' , isContainer: false},
        { label: 'RichText', icon: 'RichTextIcon' , isContainer: false},

        
      ],advancedTools: [
        // Add your advance tools here
        { label: 'Grid', icon: 'GridIcon', isContainer: true },
        { label: 'Table', icon: 'TableIcon', isContainer: true},
        { label: 'Tabs', icon: 'TabsIcon', isContainer: true },
        { label: 'Collapse', icon: 'CollapseIcon', isContainer: true },
        { label: 'Divider', icon: 'DividerIcon', isContainer: false},
        { label: 'Subform', icon: 'SubFormIcon' , isContainer: true},
        
        
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
