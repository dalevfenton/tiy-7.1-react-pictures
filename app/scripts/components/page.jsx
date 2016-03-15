var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var ImageForm = require('./form.jsx');
var ImageList = require('./listing.jsx');

var Page = React.createClass({
  render: function(){
    return (
      <div>
        <div className="container-fluid">
            <ImageForm collection={this.props.collection} />
        </div>
        <div className="container">
          <ImageList collection={this.props.collection} />
        </div>
      </div>
    );
  }
});

module.exports = Page;
