const ADDMISSION = 'ADDMISSION';

export default function Rockets(state = [], action = {}) {
  switch (action.type) {
    case ADDMISSION:
      return [...state, {
        ...action.rocket,
      }];
    default:
      return state;
  }
}
