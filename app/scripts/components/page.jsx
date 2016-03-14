var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var ImageForm = require('./form.jsx');
var ImageList = require('./listing.jsx');
// var ImageListing = require('./components/listing.jsx');

// var formEl = React.createElement( ImageForm );

var Page = React.createClass({
  render: function(){

    return (
      <div className="container">
        <ImageForm />
        <ImageList collection={this.props.collection} />
      </div>
    );
  }
});

module.exports = Page;
