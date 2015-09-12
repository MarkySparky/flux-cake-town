import React, {PropTypes} from 'react';
import CakeList from './CakeList.jsx';
import Loader from './Loader.jsx';

export default React.createClass({
  propTypes: {
    loading: PropTypes.bool.isRequired,
    cakes: PropTypes.array.isRequired,
    onAddCakes: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      loading: false,
      cakes: []
    }
  },

  render() {
    let {onAddCakes, onClear, cakes, loading} = this.props;
    var activeComponent;
    if (loading) {
      activeComponent = <Loader />;
    } else {
      activeComponent = <CakeList cakes={cakes} />;
    }

    return (
      <div>
        <h1><img src="images/cake.jpg" /></h1>
        <nav className="actions">
          <button onClick={onAddCakes}>Bring out the cakes</button>
          <button onClick={onClear}>Eat &apos;em all</button>
        </nav>
        {activeComponent}  
      </div>
    );
  }
});
