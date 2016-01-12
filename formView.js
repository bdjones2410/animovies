var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$=$;
var tmpl = require('./templates');
var MovieModel = require('./moviemodel');

module.exports = Backbone.View.extend({

  className:'col-md-4',

  events:{
    'click .submit': 'submitting',
  },

  submitting: function(e){
    e.preventDefault();
    var newMovie = {
      cover:this.$el.find('input[type="cover"]').val(),
      title:this.$el.find('input[type="title"]').val(),
      rating:this.$el.find('input[type="rate"]').val(),
      plot:this.$el.find('textarea[name="plot"]').val(),
      mvDate:this.$el.find('input[type="mvdate"]').val(),
    };
    this.$el.find('input').val('');
    this.$el.find('textarea').val('');
    var newModel = new MovieModel(newMovie);
    newModel.save();
    this.collection.unshift(newModel);

  },
  template: _.template(tmpl.forms),

  render: function(){
    var ourHTML = this.template(this.model);
    this.$el.html(ourHTML);
    return this;
  }




});
