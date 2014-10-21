# grunt-typson

This plugin is pretty basic, so don't expect features. It is designed to send a typscript definition file through the [typson](https://github.com/lbovet/typson) library and output JSONSchema.

> typson plugin for grunt

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-typson --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-typson');
```

## The "typson" task

### Usage Examples

```js
grunt.initConfig({
  typson: {
    files: {
      'tmp/default_options': ['test/fixtures/*.ts']
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
