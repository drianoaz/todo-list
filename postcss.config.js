module.exports = {
  plugins: {
    'autoprefixer': {},
    'rucksack-css': {},
    'postcss-font-magician': {},
    'cssnano': {
      'preset': [
        'default',
        {'discardComments': {'removeAll': true}}
      ]
    }
  }
};
