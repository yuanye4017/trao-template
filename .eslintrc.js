module.exports = {
  'extends': ['taro/react'],
  "rules": {
    'no-unused-vars': [2, {'vars': 'all',"varsIgnorePattern": "Taro"}], // 不允许使用未使用的变量
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    'arrow-spacing': [2, { 'before': true,'after': true}], // 箭头函数的箭头前后标准化间距样式
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],
    'camelcase': [0, {'properties': 'always'}], // 命名变量时规则
    'comma-dangle': [2, 'never'], // 此规则强制在 对象 和 数组 中一致地使用尾随 逗号
    'comma-spacing': [2, {'before': false,'after': true}], // 逗号之后添加一个空格
    'comma-style': [2, 'last'], // 强制一致的逗号样式 
    'curly': [2, 'multi-line'], // 对所有控制语句强制使用一致的大括号样式 {}
    'dot-location': [2, 'property'], // 在点前后强制使用一致的换行符
    'eol-last': 2, // 在文件末尾需要或不允许换行
    'eqeqeq': ["error", "always", {"null": "ignore"}], // 需要使用`==`和`！==`
    'generator-star-spacing': [2, {'before': true,'after': true}], // 在生成器函数中的`*`运算符周围强制一致间距
    'indent': [2, 2, {'SwitchCase': 1}], // 强制一致缩进
    'jsx-quotes': [2, 'prefer-single'], // 在JSX属性中强制一致地使用双引号或单引号 prefer-single为单引号
    'key-spacing': [2, {'beforeColon': false,'afterColon': true}], // 在对象文本属性中强制键和值之间的一致间距
    'keyword-spacing': [2, {'before': true,'after': true}], // 强制关键字前后的间距一致
    'new-cap': [2, {'newIsCap': true,'capIsNew': false}], // 要求构造函数名称以大写字母开头
    'new-parens': 2, // 在调用没有参数的构造函数时强制或不允许使用括号
    'no-array-constructor': 2, // 不允许使用“Array”构造函数
    // 'no-caller': 2,
    'no-console': 'off', // 不允许使用'console off关闭
    'no-class-assign': 2, // 不允许重新指派类成员
    'no-cond-assign': 2, // 禁止条件表达式中的赋值运算符
    'no-const-assign': 2, // 不允许重新分配“const”变量
    'no-control-regex': 0, // 不允许在正则表达式中使用控制字符
    'no-delete-var': 2, // 不允许删除变量
    'no-dupe-args': 2, // 禁止“function”定义中的重复参数
    'no-dupe-class-members': 2, // 不允许重复的类成员
    'no-dupe-keys': 2, // 禁止对象文本中的重复键
    'no-duplicate-case': 2, // 不允许重复的大小写标签
    'no-empty-character-class': 2, // 在正则表达式中不允许空字符类
    'no-empty-pattern': 2, // 不允许空的解构模式
    'no-eval': 2, // 不能使用eval
    'no-ex-assign': 2, // 禁止在“catch”子句中重新指派异常
    'no-extra-bind': 2, // 不允许对`.bind（）进行不必要的调用`
    'no-extra-boolean-cast': 2, // 不允许不必要的布尔类型转换
    'no-extra-parens': [2, 'functions'], // 禁止functions不必要的括号
    'no-fallthrough': 2, // 不允许“case”语句失败
    'no-floating-decimal': 2, // 不允许数字文本中的前导或尾随小数点
    'no-func-assign': 2, // 不允许重新指派“function”声明
    'no-implied-eval': 2, // 禁止使用类似“eval（）”的方法
    'no-inner-declarations': [2, 'functions'], // 禁止嵌套块中的变量或“函数”声明
    'no-invalid-regexp': 2, // 禁止“RegExp”构造函数中的无效正则表达式字符串
    'no-irregular-whitespace': 2, // 不允许不规则空白
    'no-iterator': 2, // 不允许使用“迭代器”属性
    'no-label-var': 2, // 不允许与变量共享名称的标签
    'no-labels': [2, {'allowLoop': false,'allowSwitch': false}], // 不允许标记语句
    'no-lone-blocks': 2, // 不允许不必要的嵌套块
    'no-mixed-spaces-and-tabs': 2, // 不允许混合空格和制表符缩进
    'no-multi-spaces': 2, // 不允许多个空格
    'no-multi-str': 2, // 不允许多行字符串
    'no-multiple-empty-lines': [2, {'max': 1}], // 不允许多个空行
    'no-native-reassign': 2, // 没有全局分配
    'no-negated-in-lhs': 2, // 没有不安全的否定
    'no-new-object': 2, // 不允许使用“Object”构造函数
    'no-new-symbol': 2, // 不允许使用带有“Symbol”对象的“new”运算符
    'no-new-wrappers': 2, // 禁止使用带有“String”、“Number”和“Boolean”对象的“new”运算符
    'no-obj-calls': 2, // 不允许将全局对象属性作为函数调用
    'no-octal': 2, // 不允许八进制文字
    'no-octal-escape': 2, // 不允许字符串文字中的八进制转义序列
    'no-proto': 2, // 禁止使用“proto”属性
    'no-redeclare': 2, // 不允许变量重新声明
    'no-regex-spaces': 2, // 不允许在正则表达式中使用多个空格
    'no-return-assign': [2, 'except-parens'], // 禁止在“return”语句中使用赋值运算符
    'no-self-assign': 2, // 不允许两边完全相同的赋值
    'no-self-compare': 2, // 不允许双方完全相同的比较
    'no-sequences': 2, // 不允许逗号运算符
    "no-shadow": 0,
    'no-shadow-restricted-names': 2, // 禁止标识符隐藏受限制的名称
    'no-spaced-func': 2, // 函数调用间隔
    'no-sparse-arrays': 2, // 不允许稀疏数组 ps:[ "red",, "blue" ]
    'no-this-before-super': 2, // 禁止在构造函数中调用'super（）'之前使用'this'/'super'
    'no-throw-literal': 2, // 不允许将文本作为异常抛出
    'no-trailing-spaces': 2, // 不允许在行尾使用尾随空格
    'no-undef': 2, // 除非在`/*global*/`comments中提到，否则不允许使用未声明的变量
    'no-undef-init': 2, // 不允许将变量初始化为“未定义”`
    'no-unexpected-multiline': 2, // 不允许混淆多行表达式
    'no-unmodified-loop-condition': 2, // 不允许未修改的循环条件
    'no-unneeded-ternary': [2, {'defaultAssignment': false}], // 当存在更简单的替代项时不允许使用三元运算符
    'no-unreachable': 2, // 禁止在“return”、“throw”、“continue”和“break”语句后出现无法访问的代码
    'no-unsafe-finally': 2, // 禁止在“finally”块中使用控制流语句
    'no-useless-call': 2, // 禁止对`.call（）`和`.apply（）进行不必要的调用`
    'no-useless-computed-key': 2, // 禁止在对象和类中使用不必要的计算属性键
    'no-useless-constructor': 2, // 不允许不必要的构造函数
    'no-useless-escape': 0, // 不允许不必要的转义字符
    'no-whitespace-before-property': 2, // 属性前不允许空白
    'no-with': 2, // 不允许使用“with”语句
    'one-var': [2, {'initialized': 'never'}], // 强制在函数中同时或单独声明变量
    'operator-linebreak': [2, 'after', { // 为运算符强制使用一致的换行符样式
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'import/no-commonjs': 0,
    "import/prefer-default-export": 0, // 允许使用export导出
    'padded-blocks': [2, 'never'], // 要求或不允许块内填充
    'quotes': [2, 'single', { // 强制一致使用反勾号、双引号或单引号
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'never'], // 需要或不允许分号而不是ASI
    'semi-spacing': [2, { // 在分号前后强制一致间距
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'], // 在块之前强制一致间距
    'space-before-function-paren': [2, 'never'], // 在“function”定义的左括号前强制使用一致间距
    'space-in-parens': [2, 'never'], // 强制圆括号内的间距一致
    'space-infix-ops': 2, // 需要中缀运算符周围的间距
    'space-unary-ops': [2, { // 在一元运算符之前或之后强制一致间距
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', { // 在注释中的`//`或`/*`后面强制保持一致的间距
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'], // 要求或不允许模板字符串的嵌入表达式之间的间距
    'use-isnan': 2, // 检查'NaN'时需要调用'isNaN（）'`
    'valid-typeof': 2, // valid-typeof
    'wrap-iife': [2, 'any'], // 立即调用“function”时需要括号
    'yield-star-spacing': [2, 'both'], // “yield*”表达式中“*”周围需要或不允许间距
    'yoda': [2, 'never'], // 要求或不允许“Yoda”条件
    'prefer-const': 2, // 对于声明后从不重新分配的变量，需要“const”声明
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 禁止使用“调试器”`
    'object-curly-spacing': [2, 'always', { // 加强支撑内的一致间距
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never'] // 在数组括号内强制一致间距
  }
}
