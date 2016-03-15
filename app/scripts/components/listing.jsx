var React = require('react');
var ReactDOM = require('react-dom');

var Backbone = require('backbone');
require('backbone-react-component');

var ImageDetail = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return {
      editOn: false
    };
  },
  setEdit: function(e){
    console.log(this.state.editOn);
    this.setState({ editOn: true });
    console.log(this.state.editOn);
  },
  delete: function(e){
    this.props.model.destroy();
  },
  render: function(){
    return (
      <div className="image-detail-holder">
        <div className="image-detail-image-holder">
          <img src={this.props.model.get('url_src')} />
          <button className="image-detail-edit" onClick={this.setEdit}>
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
          </button>
          <button className="image-detail-delete" onClick={this.delete}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
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
