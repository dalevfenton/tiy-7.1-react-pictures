var React = require('react');
var ReactDOM = require('react-dom');

var Backbone = require('backbone');
require('backbone-react-component');

var ImageDetail = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      <div className="image-detail-holder">
        <div className="image-detail-image-holder">
          <img src={this.props.model.get('url_src')} />
        </div>
        <div className="image-detail-caption-holder">
          <h4 className="image-detail-caption">{this.props.model.get('caption')}</h4>
        </div>
      </div>
    )
  }
});

var ImageListing = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var imageList = this.props.collection.map(function(model){
      return (
        <ImageDetail model={model} key={model.get('_id')} />
      );
    });

    return (
      <div id="image-list-holder" className="row">
          {imageList}
      </div>
    )
  }
})

module.exports = ImageListing;
