/**
 * Module dependencies
 */

var Onus = require('onus');

module.exports = function(conf, toCSS) {
  var render = conf.render;
  return Onus({
    render: function(DOM, $get, props, state, _yield, params, query, forms, t) {
      var out = render.call(this, toCSS, $get, props, state, _yield, params, query, forms, t) || '';
      var css = Array.isArray(out) ? flatten(out) : out;
      return DOM('style', {dangerouslySetInnerHTML: {__html: '\n' + css}});
    }
  });
};

function flatten(arr) {
  return arr.map(function(style) {
    if (!style) return '';
    return Array.isArray(style) ? flatten(style) : style;
  }).join('');
}
