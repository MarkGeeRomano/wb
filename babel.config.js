module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'usage'
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-proposal-pipeline-operator',
      {
        'proposal': 'minimal'
      }
    ],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-async-to-generator'
  ]
}