module.exports = {
  paths: {
    public: 'public'
  },

  files: {
    javascripts: {
      joinTo: {
      'javascripts/app.js': /^app/,
      'javascripts/vendor.js': /^(?!app)/
      }
    },
    stylesheets: {
      joinTo: {
        'styles/app.css': /^app/,
        'styles/vendor.css': /^(?!app)/
      }
    },
    templates: {joinTo: 'javascripts/app.js'}
  },

  plugins: {
      on: ['postcss-brunch']
  }
};