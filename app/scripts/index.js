var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var models = require('./models/models');

var cachedData = [
  { 'url_src': 'https://lh3.ggpht.com/iqBXuNgqZoyPMwXSY7ENa4zNmWH_DUIZ55eIbdPIiyhMXRkPhBTJsEJctPX8FA4wkg=h900', 'caption': 'Beautiful Landscape Puzzle - Really Awesome Waterfall'},
  { 'url_src': 'https://lh5.ggpht.com/EsIOw_M7lK9HVWmsZSura5oZL7iucO0ctNuj3xvCecMye0y3FUfVEQJXLpeFXVWUPg=h900', 'caption': 'Beautiful Landscape Puzzle - Really Awesome Leaves'},
  { 'url_src': 'https://googleplus-covers.com/covers/beautiful_morning.jpg', 'caption': 'Google Cover Plus - Really Awesome Beautiful Morning'}
];

var images = new models.ImageCollection( cachedData );

var Page = require('./components/page.jsx');
// console.log( images );

ReactDOM.render(
  <Page collection={images} />,
  document.getElementById( 'app' )
);
