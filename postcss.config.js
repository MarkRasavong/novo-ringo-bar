module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: 'default',
      discardComments: {
        removeAll: true,
      },
      generateScopedName: '[hash:base64:5]',
    },
  },
};
