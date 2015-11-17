var $ = require('jquery');
var MovieCollection = require('./moviecollection');
var MovieCollectionView = require('./moviecollectionview');

$(function(){

  var movies = new MovieCollection();

  movies.fetch().then(function(data){

    new MovieCollectionView({collection: movies});

  });






});
