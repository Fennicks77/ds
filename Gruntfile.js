grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  concat: {
    options: {
      stripBanners: true,
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */',
    },
    dist: {
      src: ['src/project.js'],
      dest: 'dist/built.js',
    },
  },
});
