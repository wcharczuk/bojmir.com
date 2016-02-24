module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        aws: grunt.file.readJSON('aws.json'),

        s3: {
            options: {
                accessKeyId: '<%= aws.AWSAccessKeyId %>',
                secretAccessKey: '<%= aws.AWSSecretKey %>',
                bucket: '<%= aws.AWS_S3_Bucket %>',
                access: "public-read"
            },
            dist: {
                cwd: "dist",
                src: "**"
            }
        },

    });

    grunt.loadNpmTasks('grunt-aws');

    grunt.registerTask(
        'deploy',
        'Deploys the site to S3',
        [ 's3:dist' ]
    )
};
