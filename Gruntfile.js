module.exports = function(grunt){
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          keepalive: true,
          open: {
            target: 'http://localhost:9000'
          }
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt');
  grunt.loadNpmTasks('grunt-connect');
 
  grunt.registerTask('default', ['connect']);
};