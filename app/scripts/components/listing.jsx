var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');


var ImageEdit = React.createClass({
  getInitialState: function() {
    return {
      url_src: this.props.model.get('url_src'),
      caption: this.props.model.get('caption')
    };
  },
  handleURLInput: function(e) {
    this.setState({url_src: e.target.value});
  },
  handleCaptionInput: function(e) {
    this.setState({caption: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var url_src = this.state.url_src;
    var caption = this.state.caption;
    if (!url_src || !caption) {
      return;
    }
    this.props.model.save({url_src: url_src, caption: caption}, {wait: true});
    this.setState({url_src: '', caption: ''});
    this.props.onEditSubmit();
  },
  toggleForm: function(e){
    e.preventDefault();
    this.props.onEditSubmit();
  },
  render: function(){
    return (
      <div className="row">
        <form id="edit-image-form" className="image-form" onSubmit={this.handleSubmit}>
          <input
            type="url"
            className="form-control"
            name="url_src"
            placeholder="Image URL"
            value={this.state.url_src}
            onChange={this.handleURLInput} />
          <textarea
            type="text"
            className="form-control"
            name="caption"
            placeholder="Image Caption"
            value={this.state.caption}
            onChange={this.handleCaptionInput} ></textarea>
          <button
            className="submit btn btn-success"
            type="submit"
            name="submit"
            value="Post" >
            <span className="image-btn-pic glyphicon glyphicon-picture" aria-hidden="true"></span>
            <span className="button-with-icon-text">Edit Image Data</span>
          </button>
          <button
            className="cancel-form btn"
            onClick={this.toggleForm}>Cancel</button>
        </form>
      </div>
    );
  }
});

var ImageDetail = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return {
      editOn: false
    };
  },
  toggleEdit: function(e){
    this.setState({ editOn: !this.state.editOn });
  },
  delete: function(e){
    this.props.model.destroy();
  },
  render: function(){
    var caption;
    if(this.state.editOn){
      caption = ( <ImageEdit model={this.props.model} onEditSubmit={this.toggleEdit} /> );
    }else{
      caption = (  <h4 className="image-detail-caption">{this.props.model.get('caption')}</h4> );
    }
    return (
      <div className="image-detail-holder">
        <div className="image-detail-image-holder">
          <div className="image-detail-image-button-holder">
            <img src={this.props.model.get('url_src')} />
            <button className="image-detail-edit" onClick={this.toggleEdit}>
              <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
            </button>
            <button className="image-detail-delete" onClick={this.delete}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </button>
          </div>
        </div>
        <div className="image-detail-caption-holder">
          {caption}
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
