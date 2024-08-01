// 导出 js 对象，stylelint 常用配置
// https://www.cnblogs.com/BlackStorm/p/add-stylelint-to-your-vue-project.html
// 取消行的不检测 /* stylelint-disable 这里是你的规则名 */ 把这个注释放到 {} 中间的某行css样式代码上面即可
// style 规则 | Rules
// https://cloud.tencent.com/developer/section/1489630
module.exports = {
  defaultSeverity: 'error',
  // 'stylelint-order' 强制你按照某个顺序编写 css，顺序对应由 stylelint-config-recess-order 插件提供
  plugins: ['stylelint-order'], // https://github.com/hudochenkov/stylelint-order
  extends: [
    'stylelint-config-standard', // 配置 Stylelint 规则
    'stylelint-config-prettier',
    'stylelint-config-recess-order' // stylelint-order 插件的第三方配置，css属性顺序的规则（例如先写定位，再写盒模型，再写内容区样式，最后写 CSS3 相关属性）
  ], // extends: 'stylelint-config-standard' (stylelint-config-standard is a great foundation for your own config)
  // 各rules的具体作用见上面链接
  // stylelint rules -> http://stylelint.io/user-guide/rules/
  // stylelint-config-standard -> https://github.com/stylelint/stylelint-config-standard
  // CSS属性顺序 -> https://github.com/twitter/recess/blob/master/lib/lint/strict-property-order.js
  // 注意：这里的配置如果发生修改的话请同时把 settings.json 中对于的 `stylelint.config` 同时一并修改，否则 stylelint 插件无法在文件中自动提示这个规则的错误信息
  rules: {
    'block-no-empty': null,
    'max-empty-lines': 2,
    'declaration-colon-space-after': 'always',
    // 颜色
    'color-named': 'always-where-possible',
    'color-no-hex': true,
    'color-no-invalid-hex': true,
    /* 'comment-empty-line-before': ['always', {
      ignore: ['between-comments', 'stylelint-commands']
    }],
    'rule-nested-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['after-comment']
    }], */
    // 允许的单位
    'unit-allowed-list': [
      'em',
      'rem',
      '%',
      's',
      'ms',
      'px',
      'vh',
      'deg',
      'pr',
      'rpx',
      'fr'
    ],
    'unit-no-unknown': [
      true,
      { ignoreUnits: ['pr', 'rpx'], ignoreFunctions: [] }
    ],
    // 使用以下命令指定必须使用的引号
    'font-family-name-quotes': 'always-unless-keyword',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'string-quotes': 'single',
    // 如果使用 autoprefixer，则要使用以下命令禁止供应商前缀
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    // 使用以下方法控制特异性
    'max-nesting-depth': 4,
    'selector-max-compound-selectors': 4,
    // 格式为 "id,class,type" 0个id总数 5个class总数 0个type类选择器总数
    // .app .bbb .ccc {} 这样会报错因为class的个数大于2
    // #app {} 这样也会报错因为id的数量是0
    // p {} 这样写不会报错
    // .foo div {} 这样写不会报错
    // .foo div { & div a {} }  这样写不会报错
    'selector-max-specificity': '0,5,0', // https://blog.csdn.net/tangxiaolang101/article/details/51760358
    // 指定可接受的选择器类型，单位，属性，函数和注释中的单词
    'selector-max-id': 3,
    'selector-max-type': 3,
    // 使用以下一种或多种有效表示形式时，请指定一种表示法
    'font-weight-notation': 'numeric',
    // 指定允许的URL类型
    'function-url-no-scheme-relative': true,
    // 指定最大行长
    'max-line-length': [80, { ignore: ['non-comments'] }],
    // 禁止使用未知的伪类选择器
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    // 字体名-把提示报错的字体写到这里
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['SimSun', 'pmzd']
      }
    ]
  }
};
