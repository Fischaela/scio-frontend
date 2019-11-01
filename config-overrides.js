// https://ant.design/docs/react/customize-theme
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#0c103e',
      '@layout-body-background': '#ecf1f5',
      '@layout-header-background': '#0c103e',
    },
  }),
);

// blue-primary: #0c103e
// blue-medium: #1d2e5f
// blue-lighter: #05c4ff
// blue-lighter: #cce2f2
// blue-grey: #3a495b
// blue-grey-light: #93a4bc
// blue-grey-lighter: #ecf1f5
// pink: #e3204b
// red: #cb0813
// orange: #e34e20
// yellow: #ffcc01
// cyan: #23958d