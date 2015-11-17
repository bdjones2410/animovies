var Backbone = require('backbone');
var movieModel = require('./moviemodel');


module.exports = Backbone.Collection.extend({
  url:'https://tiny-tiny.herokuapp.com/collections/animovies',
  model: movieModel

});
