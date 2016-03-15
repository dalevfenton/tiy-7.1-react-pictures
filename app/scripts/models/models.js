var Backbone = require('backbone');

var Image = Backbone.Model.extend({
  idAttribute: '_id',
  initialize: function(){
    if ( !this.get('created') ){
      this.set({'created': new Date() });
    }
  }
});

var ImageCollection = Backbone.Collection.extend({
  model: Image,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/daleReactImages',
  comparator: -'created',
  initialize: function(){
    this.listenTo(this, 'change', this.sort);
  },
});

module.exports = {
  Image: Image,
  ImageCollection: ImageCollection
};
