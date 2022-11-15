const ADDROCKET = 'ADDROCKET';

export default function Rockets(state = [], action = {}) {
  switch (action.type) {
    case ADDROCKET:
      return [...state, {
        ...action.rocket,
      }];
    default:
      return state;
  }
}
