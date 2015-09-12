import React from 'react';
import Cake from './Cake.jsx';

export default React.createClass({
  getDefaultProps() {
    return {
      cakes: []
    };
  },

  render() {
    let {cakes} = this.props;
    return (
        <ul id="cakelist" className="cakes">
          {cakes.map(cake =>
            <Cake cake={cake} />
          )}
        </ul>
    );
  }
});
