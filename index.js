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
      var out = render(format, $get, props, state, _yield, params, query, forms, t);
      var style = Array.isArray(out) ? out.join('') : out;
      return DOM('style', null, '\n' + style);
    }
  });
}

function format(selectors, props) {
  return selectors.join(',\n') + ' {\n' + formatProps(props) + '\n}\n';
}

function formatProps(props) {
  var parts = [];
  for (var k in props) {
    if (k === 'key') continue;
    parts.push('  ' + k + ':' + props[k] + ';');
  }
  return parts.join('\n');
}
