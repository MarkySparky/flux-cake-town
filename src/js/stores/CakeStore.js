import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let _data = [];
let _loading = false;

// private functions to modify data
function addCake(cake) {
  _data.push(cake);
}

function resetCakes() {
  _data = [];
}

function setCakesLoading(val) {
  _loading = val;
}

// Facebook style store creation.
const CakeStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {
      return {
        cakes: _data
      };
    },

    getIsLoading() {
      return _loading;
    },

    // register store with dispatcher, allowing actions to flow through
    dispatcherIndex: Dispatcher.register(function(payload) {
      let action = payload.action;

      switch (action.type) {
        case Constants.ActionTypes.CAKES_LOADING:
          setCakesLoading(true);
          CakeStore.emitChange();
        case Constants.ActionTypes.CAKES_RESET:
          resetCakes();
          CakeStore.emitChange();
        case Constants.ActionTypes.CAKES_ADDED:
          setCakesLoading(false);
          if (action.cakes) {
            let cakes = action.cakes;
            cakes.forEach(function(item) {
              addCake(item);
            })
            CakeStore.emitChange();
          }
          break;
      }
    })
});

export default CakeStore;
