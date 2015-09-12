import React from 'react';
import ActionCreator from '../actions/CakeActionCreators';

export default React.createClass({
  getDefaultProps() {
    return {
      cake: {
        title: '',
        url: '',
        desc: ''
      }
    };
  },

  render() {
    let {cake} = this.props;
    return (
      <li className="cake">
        <div className="photo-container">
          <img className="photo" alt={cake.title} src={cake.image} />
        </div>
        <div className="cake-body">
          <h3 className="cake-title" >{cake.title}</h3>
          <div className="cake-desc" >{cake.desc}</div>
        </div>
      </li>
    );
  }
});
