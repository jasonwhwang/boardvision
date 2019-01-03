const localStorageMiddleware = store => next => action => {
  if (action.type === 'LOGIN' && localStorage.getItem('access_token') === null) {
    localStorage.setItem('profile', JSON.stringify(action.profile));
    localStorage.setItem('id_token', action.idToken);
    localStorage.setItem('access_token', action.accessToken);
    localStorage.setItem('expires_at', JSON.stringify(action.expiresAt));
  }
  if (action.type === 'LOGOUT') {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
  }
  next(action);
};

export {
  localStorageMiddleware
};