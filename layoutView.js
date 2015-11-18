var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var HeaderView = require('./headerView');
var FormView = require('./formView');
var MovieCollection = require('./moviecollection');
var MovieCollectionView = require('./moviecollectionview');

module.exports = Backbone.View.extend({
  el: '.content',
  initialize: function(){
    var self = this;
    var headerHTML = new HeaderView();
    var formHTML = new FormView();
    var movies = new MovieCollection();
    movies.fetch().then(function(data){
      new MovieCollectionView({collection: movies});
      self.$el.find('header').html(headerHTML.render().el);
      self.$el.find('#formattach').html(formHTML.render().el);
    });





  }



});
