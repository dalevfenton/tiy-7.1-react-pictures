var Backbone = require('backbone');

var Image = Backbone.Model.extend({});

var ImageCollection = Backbone.Collection.extend({
  model: Image,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/daleReactImages'
});

module.exports = {
  Image: Image,
  ImageCollection: ImageCollection
};
