<template>
  <div class="editor-container">
    <Toolbar :editor="editorRef" :default-config="defaultConfig" />
    <Editor
      v-model="editorContent"
      :default-config="defaultConfig"
      :mode="mode"
      @on-created="handleEditorCreated"
      @on-change="handleEditorChange"
    />
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import '@wangeditor/editor/dist/css/style.css';

const editorContent = ref(''); // 可以设置默认内容
const editorRef = ref(null);
const mode = 'default'; // or 'simple'
const defaultConfig = {
  placeholder: '请输入内容...',
  // 在此处配置其他选项...
};

function handleEditorCreated(editor) {
  // 编辑器创建后的操作
  editorRef.value = editor;
}

function handleEditorChange() {
  // 编辑器内容改变时的操作
  console.log('Content change:', editorContent.value);
}

onBeforeUnmount(() => {
  if (editorRef.value) {
    editorRef.value.destroy();
    editorRef.value = null;
  }
});
</script>

<style scoped>
.editor-container {
  border: 1px solid #ccc;
  .toolbar {
    border-bottom: 1px solid #ccc;
  }
  .w-e-text-container {
    height: 320px;
    overflow-y: hidden;
  }
}
</style>
