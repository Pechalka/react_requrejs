(function () {

	var libs = '../bower_components/';

	requirejs.config({
        urlArgs: "bust=" + (new Date()).getTime(),
        paths: {
            'css': libs + 'require-css/css',
            'text': libs + 'requirejs-text/text',
            "JSXTransformer": libs + "jsx-requirejs-plugin/js/JSXTransformer",
            "jsx": libs + "jsx-requirejs-plugin/js/jsx"

        },
        shim: {
        	
        } ,
        jsx: {
            fileExtension: '.jsx',
            harmony: true,
            stripTypes: true
        }
    });


    define('react', function (require) {
        var React = require('../bower_components/react/react-with-addons');
        window.React = React;
        return React;
    });

    define(function (require) {
    	var React = require('react');

    	var App = require('jsx!components/App/App');

        React.render(React.createElement(App), document.getElementById('app'));
        
    })
}());