// col-md-12 movieContainer
var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  //tagName
  tagName: 'div',
  //classes
  className: 'col-md-12 movieContainer',
  //template
  template: _.template($('#animovies').html()),
  //render
  render: function(){
    var ourHTML = this.template(this.model);
    this.$el.html(ourHTML);
    return this;
  },

  initialize:function(){

  }


});
