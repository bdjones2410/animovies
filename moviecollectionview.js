var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
Backbone.$=$;
var MovieModel = require('./moviemodel');
var MovieModelView = require('./moviemodelview');

module.exports = Backbone.View.extend({
  //el to attach templated items
  el: '.content',
  //events
  events:{
    // 'click .submit': 'submitting',

  },
    //delete event


  addOne:function(movieModel){
    var modelView = new MovieModelView({model: movieModel});
    this.$el.find('#mvattach').append(modelView.render().el);
  },

  addAll: function(){
    this.$el.find('#mvattach').html('');
  _.each(this.collection.models, this.addOne, this);
},


  initialize: function(){
    this.addAll();
    this.listenTo(this.collection, 'change', this.addAll);
    this.listenTo(this.collection, 'remove', this.addAll);
  }


});
