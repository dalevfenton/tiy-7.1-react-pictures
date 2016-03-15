var React = require('react');

var ImageForm = React.createClass({
  getInitialState: function() {
    return {
      formToggle: false,
      urlError: false,
      captionError: false,
      url_src: '',
      caption: ''
    };
  },
  handleURLInput: function(e) {
    this.setState({url_src: e.target.value});
    var url_src = this.state.url_src;
    if((!url_src )|| (url_src.indexOf('http') !== 0 && url_src.length > 5) ){
      this.setState({urlError: true});
      return;
    }else{
      this.setState({urlError: false});
    }
  },
  handleCaptionInput: function(e) {
    this.setState({caption: e.target.value});
    var caption = this.state.caption;
    if (!caption){
      this.setState({captionError: true});
      return;
    }else{
      this.setState({captionError: false});
    }
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var url_src = this.state.url_src;
    var caption = this.state.caption;
    if(!url_src || !caption){
      return;
    }
    this.props.collection.create({url_src: url_src, caption: caption}, {wait: true});
    this.setState({url_src: '', caption: '', formToggle: false});
  },
  toggleForm: function(){
    this.setState({
      formToggle: !this.state.formToggle
    });
  },
  render: function(){
    var formClass, urlClass, captionClass;
    if(this.state.formToggle){
      formClass = 'new-image-form-holder';
    }else{
      formClass = 'new-image-form-holder hidden';
    }
    if(this.state.urlError){
      urlClass = 'form-group has-error';
    }else{
      urlClass = 'form-group';
    }
    if(this.state.captionError){
      captionClass = 'form-group has-error';
    }else{
      captionClass = 'form-group';
    }
    return (
      <div className="row">
        <div className="title-bar">
          <div className="container">
            <button onClick={this.toggleForm}>
              <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
            </button>
          </div>
        </div>
        <div className={formClass}>
          <div className="container">
            <form id="new-image-form" className="image-form" onSubmit={this.handleSubmit}>
              <div className={urlClass}>
                <input
                  type="url"
                  className="form-control"
                  name="url_src"
                  placeholder="Image URL"
                  value={this.state.url_src}
                  onChange={this.handleURLInput}
                />
              </div>
              <div className={captionClass}>
                <textarea
                  type="text"
                  className={captionClass}
                  name="caption"
                  placeholder="Image Caption"
                  value={this.state.caption}
                  onChange={this.handleCaptionInput}
                ></textarea>
              </div>
              <button
                className="submit btn btn-success"
                type="submit"
                name="submit"
                value="Post"
              >
                <span className="image-btn-pic glyphicon glyphicon-picture" aria-hidden="true"></span>
                <span className="button-with-icon-text">Add Image</span>
              </button>
              <button
                className="cancel-form btn"
                onClick={this.toggleForm}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ImageForm;
