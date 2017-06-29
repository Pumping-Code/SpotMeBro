import { ActionConst } from 'react-native-router-flux';

const initialState = {
  scene: {},
};

export default function reducer(state = initialState, action = {}) {
  if (action.type === ActionConst.FOCUS) {
    return { ...state, scene: action.scene };
  }
  return state;
}
