// col-md-12 movieContainer
var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');
Backbone.$ = $;
var MovieCollectionView = require('./moviecollectionview');

module.exports = Backbone.View.extend({

  //tagName
  tagName: 'div',
  //classes
  className: 'col-md-12 movieContainer',
  //template
  template: _.template(tmpl.animovies),
  //add events to this, such as your edit and delete;
  events:{
    'click .delete': 'deleteMe',
    'click .usersub': 'newrate',




  },

  deleteMe:function(e){
    e.preventDefault();
    this.model.collection.remove(this.model);
    this.model.destroy();

  },


// move this to movie model view.


  newrate: function(e){
    e.preventDefault();
    var newRate = this.$el.find('input[name="userScore"]').val();
    this.model.set({rating: newRate});
    this.model.save();
    this.$el.find('input[type="usersRate"]').val('');
  },





  //render
  render: function(){
    var ourHTML = this.template(this.model.toJSON());
    this.$el.html(ourHTML);
    return this;
  },

  initialize:function(){

  }


});
