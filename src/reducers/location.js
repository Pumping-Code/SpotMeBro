const initialState = {
  location: {
    lat: null,
    lng: null,
  },
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_LOCATION':
      return { ...state, scene: action.scene };
    default:
      return state;
  }
}
