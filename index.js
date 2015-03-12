/**
 * Module dependencies
 */

var Onus = require('onus');

module.exports = function(conf, toCSS) {
  var render = conf.render;
  return Onus({
    render: function(DOM, $get, props, state, _yield, params, query, forms, t) {
      var out = render.call(this, toCSS, $get, props, state, _yield, params, query, forms, t);
      var style = Array.isArray(out) ? out.join('') : out;
      return DOM('style', null, '\n' + style);
    }
  });
};
