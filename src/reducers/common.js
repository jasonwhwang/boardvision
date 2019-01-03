const defaultState = {
  profile: {
    name: 'user@email.com',
    nickname: 'User',
    picture: 'https://static.productionready.io/images/smiley-cyrus.jpg'
  },
  token: null,

  phone: null,
  directors: null,
  notifications: null,
  redirectTo: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        profile: action.error ? null : action.profile,
        token: action.error ? null : action.idToken,
        redirectTo: null
      };
    case 'PROFILE_LOAD':
      return {
        ...state,
        phone: action.service.results.phone,
        directors: action.service.results.directors
      }
    case 'NOTIFICATION_LOAD':
      return {
        ...state,
        notifications: action.service.results
      }
    case 'LOGOUT': {
      return {
        ...state,
        profile: {
          name: 'user@email.com',
          nickname: 'User',
          picture: 'https://static.productionready.io/images/smiley-cyrus.jpg'
        },
        token: null,
        redirectTo: '/login'
      };
    }
    case 'REDIRECT':
      return { ...state, redirectTo: null };
    default:
      return state;
  }
};