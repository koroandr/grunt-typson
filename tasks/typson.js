/*
 * grunt-typson
 * https://github.com/thecolorblue/grunt-typson
 *
 * Copyright (c) 2014 Brad Davis
 * Licensed under the MIT license.
 */

'use strict';

var typson = require('typson');
var q = require('q');
var _ = require('underscore');

module.exports = function(grunt) {

  grunt.registerMultiTask('typson', 'typson plugin for grunt', function() {
    var done = this.async();

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
        q.all(
          f.src.filter(function(filepath) {

            // make sure each file is really there
            if (!grunt.file.exists(filepath)) {
              grunt.log.warn('Source file "' + filepath + '" not found.');
              return false;
            } else {
              return true;
            }
          }).map(function(filepath) {
            // pass file to typson library.
            return typson.schema(filepath);;
          })
        ).then(function (schemas) {
              var uber_schema = schemas[0];

              _.each(schemas.slice(1), function (schema) {
                  uber_schema.definitions = _.extend(uber_schema.definitions, schema.definitions);
              });

              // then write the response to fs

              // TODO: allow settings for formating JSONSchemas
              grunt.file.write(f.dest, JSON.stringify(uber_schema, null, 2));

              // Print a success message.
              grunt.log.writeln('File "' + f.dest + '" created.');
              done();
        });
    });
  });
};
