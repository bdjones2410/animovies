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
    'click .delete': 'deleteMe',
    'click .usersub': 'newrate',
  },
    //delete event
    deleteMe:function(e){
      e.preventDefault();
      var ourId = $(e.target).attr('id');
      var badMove = this.collection.get(ourId);
      badMove.destroy();
    },

    newrate: function(e){
      e.preventDefault();
      var ourID = $(e.target).siblings('.delete').attr('id');
      var updateMod = this.collection.get(ourID);
      var newRate = $(e.target).siblings('form').children('input[name="userScore"]').val();
      updateMod.set({rating: newRate});
      updateMod.save();
      this.$el.find('input[type="usersRate"]').val('');
    },

  //addOne
  addOne:function(movieModel){
    var modelView = new MovieModelView({model: movieModel});
    this.$el.find('#mvattach').append(modelView.render().el);
  },
  //addAll
  addAll: function(){
  _.each(this.collection.models, this.addOne, this);
},

  //initialize
  initialize: function(){
    this.addAll();
  }


});
