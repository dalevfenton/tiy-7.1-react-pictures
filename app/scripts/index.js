// 3rd party libs
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

//import backbone models
var models = require('./models/models');

//import top level React component
var Page = require('./components/page.jsx');

// var cached = [{"_id":"56e776dfa3ad3d0300001820","url_src":"http://www.bt-images.net/wp-content/uploads/2014/02/summer-sunset.jpg","caption":"A mysterious marsh by Trey Ratcliff via Flickr","created":"2016-03-15T02:43:43.132Z"},{"_id":"56e7768ea3ad3d030000181f","url_src":"http://www.bt-images.net/wp-content/uploads/2014/02/Badabeh-surt.jpg","caption":"Badab Soort Natural Spring, Mazandaran, Iran by Ninara via Flickr","created":"2016-03-15T02:42:22.714Z"},{"_id":"56e7759fa3ad3d030000181c","url_src":"http://www.bt-images.net/wp-content/uploads/2014/02/Geyser.jpg","caption":"Fly Geyser via Wikimedia Commons (Nevada, USA)","created":"2016-03-15T02:38:23.563Z"},{"_id":"56e77221a3ad3d0300001819","url_src":"https://googleplus-covers.com/covers/beautiful_morning.jpg","caption":"Google Cover Plus - Really Awesome Beautiful Morning","created":"2016-03-15T02:35:10.335Z"},{"_id":"56e77221a3ad3d0300001818","url_src":"https://lh5.ggpht.com/EsIOw_M7lK9HVWmsZSura5oZL7iucO0ctNuj3xvCecMye0y3FUfVEQJXLpeFXVWUPg=h900","caption":"Beautiful Landscape Puzzle - Really Awesome Leaves","created":"2016-03-15T02:35:10.336Z"},{"_id":"56e77221a3ad3d0300001817","url_src":"https://lh3.ggpht.com/iqBXuNgqZoyPMwXSY7ENa4zNmWH_DUIZ55eIbdPIiyhMXRkPhBTJsEJctPX8FA4wkg=h900","caption":"Beautiful Landscape Puzzle - Really Awesome Waterfall","created":"2016-03-15T02:35:10.336Z"},{"_id":"56e771f1a3ad3d0300001816","url_src":"https://lh5.ggpht.com/EsIOw_M7lK9HVWmsZSura5oZL7iucO0ctNuj3xvCecMye0y3FUfVEQJXLpeFXVWUPg=h900","caption":"Beautiful Landscape Puzzle - Really Awesome Leaves","created":"2016-03-15T02:34:36.463Z"},{"_id":"56e771f1a3ad3d0300001815","url_src":"https://googleplus-covers.com/covers/beautiful_morning.jpg","caption":"Google Cover Plus - Really Awesome Beautiful Morning","created":"2016-03-15T02:35:10.337Z"},{"_id":"56e771f1a3ad3d0300001814","url_src":"https://lh3.ggpht.com/iqBXuNgqZoyPMwXSY7ENa4zNmWH_DUIZ55eIbdPIiyhMXRkPhBTJsEJctPX8FA4wkg=h900","caption":"Beautiful Landscape Puzzle - Really Awesome Waterfall","created":"2016-03-15T02:35:10.337Z"},{"_id":"56e770ada3ad3d0300001812","url_src":"https://s-media-cache-ak0.pinimg.com/736x/ff/55/50/ff55508083fcdc3e3c30b9990fcc04e7.jpg","caption":"beautiful landscapes - Google Search","created":"2016-03-15T02:34:36.463Z"}];
var images = new models.ImageCollection( );

// images.each(function(model){
//   model.save();
// })
console.log(images);
images.fetch().done(function(){
  ReactDOM.render(
    <Page collection={images} />,
    document.getElementById( 'app' )
  );
});

// console.log( images );
