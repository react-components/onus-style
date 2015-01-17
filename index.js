/**
 * Module dependencies
 */

var Onus = require('onus');
var React = require('react');

var componentCache = {};

module.exports = function(conf) {
  var render = conf.render;
  return Onus({
    render: function(DOM, $get, props, state, _yield, params, query, forms, t) {
      return DOM('style', null, render(format, $get, props, state, _yield, params, query, forms, t));
    }
  });
}

function format(selectors, props) {
  return selectors.join('\n') + ' {\n' + formatProps(props) + '\n}\n';
}

function formatProps(props) {
  var parts = [];
  for (var k in props) {
    parts.push('  ' + k + ':' + props[k] + ';');
  }
  return parts.join('\n');
}
