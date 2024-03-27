export const defaultProperties = {
    Email: {
      fieldId: 'email-input',
      label: 'Email Address', 
      placeholder: 'Enter your email', 
      modelValue: '' 
    },
    Phone: {
      fieldId: 'phone-input', 
      label: 'Phone Number', 
      placeholder: 'Enter your phone number', 
      modelValue: '' 
    },
    URL: {
      fieldId: 'url-input',
      label: 'Website URL',
      placeholder: 'https://www.example.com',
      modelValue: '' 
    },
    ID: {
      fieldId: 'id-input',
      label: 'Identity Card Number',
      placeholder: 'Enter your identity card number',
      modelValue: '' 
    },
    Input: {
      id: 'text-input',
      label: 'Text Input',
      placeholder: 'Enter some text',
      value: '' 
    },
    Textarea: {
      fieldId: 'textarea-input',
      label: 'Text Area',
      placeholder: 'Enter your text here',
      rows: 3, // 默认行数
      value: '' // 默认为空字符串
    },
    Number: {
      fieldId: 'number-input',
      label: 'Number Input',
      placeholder: 'Enter a number',
      modelValue: 0, // 初始化时的默认值
      min: 0, // 最小值
      max: 100, // 最大值
      step: 1 // 步长
    },
    Radio: {
      fieldId: 'radio-button',
      label: 'Choose an Option',
      options: ['Option 1', 'Option 2', 'Option 3'],
      value: 'Option 1'
    },
    Checkbox: {
      fieldId: 'checkbox-group',
      label: 'Select Options',
      options: ['Option A', 'Option B', 'Option C'],
      value: [] // 默认没有选项被选中
    },
    Select: {
      fieldId: 'dropdown-select',
      label: 'Select an Option',
      options: [
        { value: 'option1', text: 'Option 1' },
        { value: 'option2', text: 'Option 2' },
        { value: 'option3', text: 'Option 3' }
      ], // 示例选项
      value: '' // 默认选中值为空字符串
    },
    Time: {
      show: true,
      selectedHour: '00',
      selectedMinute: '00'
    },
    Date: {
      show: true, // 控制日期选择器是否初始显示
      selectedDate: new Date().toISOString().substr(0, 10) // 默认选中今天的日期
    },
    Switch: {
      fieldId: 'toggle-switch',
      label: '', // 可以根据需要提供默认标签
      value: false // 默认为关闭状态
    },
    Slider: {
      fieldId: 'slider-input',
      label: 'Slider Label',
      modelValue: 50 // 设定滑块的默认值
    },
    Grid: {
      rows: [
        {
          id: 1,
          columns: [{ id: 1 }, { id: 2 }]
        },
        // 根据需要添加更多行和列的配置
      ]
    },

  };

