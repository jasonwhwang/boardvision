const defaultState = {
  requests: null
}

export default (state=defaultState, action) => {
  switch(action.type) {
    case 'LOAD_REQUESTS':
      return {
        ...state,
        requests: action.error ? null : action.requests.results
      }
    default:
      return state;
  }
}