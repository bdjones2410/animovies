var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$=$;
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  initialize: function(){},
  template: _.template(tmpl.headerTmp),
  render: function(){
    var ourHTML = this.template(this.model);
    this.$el.html(ourHTML);
    return this;

  }





});
