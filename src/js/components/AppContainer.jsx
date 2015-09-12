import React from 'react';
import CakeStore from '../stores/CakeStore';
import ActionCreator from '../actions/CakeActionCreators';
import App from './App.jsx';

export default React.createClass({
  _onChange() {
    this.setState(CakeStore.getAll());
    this.setState({loading: CakeStore.getIsLoading()});
  },

  getInitialState() {
    return CakeStore.getAll();
  },

  componentDidMount() {
    CakeStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    CakeStore.removeChangeListener(this._onChange);
  },

  handleAddCakes(e) {
    ActionCreator.fetchCakes();
  },

  handleClear(e) {
    ActionCreator.clearList();
  },

  render() {
    let {cakes, loading} = this.state;
    return (
      <App
        onAddCakes={this.handleAddCakes}
        onClear={this.handleClear}
        cakes={cakes}
        loading={loading} />
    );
  }
});
