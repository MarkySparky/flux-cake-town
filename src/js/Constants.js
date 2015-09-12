import keyMirror from 'react/lib/keyMirror';

export default {
  // event triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  // Actions should be past-tense
  ActionTypes: keyMirror({
    CAKES_LOADING: null,
    CAKES_ADDED: null,
    CAKES_RESET: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
