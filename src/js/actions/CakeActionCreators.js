import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

export default {
  clearList() {
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.CAKES_RESET,
      });
    },

    fetchCakes: function() {
      //Faking a little timeout just to see the loader for now
      setTimeout(function() {
        $.ajax({
          url: 'https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json',
          success: function(response) {
            Dispatcher.handleViewAction({
              type: Constants.ActionTypes.CAKES_ADDED,
              cakes: JSON.parse(response)
            });
          }
        });
      }, 500);

      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.CAKES_LOADING,
        loading: true
      });
    },
};
