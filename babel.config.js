module.exports = {
  presets: [
    '@babel/env',
    '@babel/preset-react'
  ],
  plugins: [
    [
      "import", 
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": true // `style: true` 会加载 less 文件
      },
      "antd"
    ],
    [
      '@babel/plugin-proposal-optional-chaining',
      {
        loose: true,
      },
    ]
  ]
};
