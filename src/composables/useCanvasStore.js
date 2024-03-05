import { reactive, readonly, toRefs } from 'vue';

const state = reactive({
  components: [],
  selectedComponentId: null,
});

// 添加组件到画布或容器中
function addComponent(component, parentId = null) {
  const newComponent = {
    ...component,
    id: Date.now(),
    parentId,
    children: component.type === 'Container' ? [] : undefined
  };
  if (parentId) {
    const parentComponent = findComponentById(parentId);
    if (parentComponent && parentComponent.children) {
      parentComponent.children.push(newComponent);
    }
  } else {
    state.components.push(newComponent);
  }
}

// 根据ID查找组件（包括嵌套组件）
function findComponentById(id, components = state.components) {
  for (const component of components) {
    if (component.id === id) {
      return component;
    }
    if (component.children) {
      const found = findComponentById(id, component.children);
      if (found) return found;
    }
  }
  return null;
}

// 选中组件
function selectComponent(id) {
  state.selectedComponentId = id;
}

// 更新组件属性
function updateComponentProps(id, props) {
  const component = findComponentById(id);
  if (component) {
    component.props = { ...component.props, ...props };
  }
}

// 删除组件（包括从其父组件中移除）
function removeComponent(id) {
  const component = findComponentById(id);
  if (component && component.parentId) {
    const parent = findComponentById(component.parentId);
    if (parent && parent.children) {
      const index = parent.children.findIndex(c => c.id === id);
      if (index !== -1) {
        parent.children.splice(index, 1);
      }
    }
  } else {
    const index = state.components.findIndex(c => c.id === id);
    if (index !== -1) {
      state.components.splice(index, 1);
    }
  }
}

export function useCanvasStore() {
  return {
    ...toRefs(readonly(state)),
    addComponent,
    selectComponent,
    updateComponentProps,
    removeComponent,
    // 使findComponentById可访问可以帮助外部调用查找组件，可根据需求决定是否暴露
    findComponentById
  };
}
