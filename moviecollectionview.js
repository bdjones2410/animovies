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
    'click .submit': 'submitting',
    'click .delete': 'deleteMe'
  },
    //delete event
    deleteMe:function(e){
      e.preventDefault();
      var ourId = $(e.target).attr('id');
      var badMove = this.collection.get(ourId);
      badMove.destroy();
    },




    //submit event
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
      this.collection.add(newModel);
      this.addOne(newModel);
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
