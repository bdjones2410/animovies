// col-md-12 movieContainer
var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  //tagName
  tagName: 'div',
  //classes
  className: 'col-md-12 movieContainer',
  //template
  template: _.template(tmpl.animovies),
  //render
  render: function(){
    var ourHTML = this.template(this.model.toJSON());
    this.$el.html(ourHTML);
    return this;
  },

  initialize:function(){

  }


});
