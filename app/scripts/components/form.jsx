var React = require('react');

var ImageForm = React.createClass({
  render: function(){
    return (
      <div>
        <div className="title-bar">
          <button>
            <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
          </button>
        </div>
        <div className="new-image-form-holder">
          <form id="new-image-form">
            <input type="text" name="new_image_url" placeholder="Image URL"/>
            <input type="text" name="new_image_caption" placeholder="Image Caption"/>
            <button className="cancel-form">Cancel</button>
            <button className="submit" type="submit" name="submit">
              <span className="glyphicon glyphicon-picture" aria-hidden="true"></span>
              Add Image
            </button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = ImageForm;
