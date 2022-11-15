const ADDROCKET = 'ADDROCKET';
const ADDBOOKING = 'ADDBOOKING';
const URL = 'https://api.spacexdata.com/v3/rockets/';
let newState;

export function addRocket(payload) {
  return {
    type: ADDROCKET,
    payload,
  };
}

export function addBooking(id) {
  return {
    type: ADDBOOKING,
    id,
  };
}

export default function Rockets(state = [], action = {}) {
  switch (action.type) {
    case ADDROCKET:
      return [
        ...action.payload,
      ];
    case ADDBOOKING:
      newState = state.map((rocket) => {
        if (rocket.id !== action.id) {
          console.log('am returnat racheta booss', action.id);
          return rocket;
        }
        console.log('cica am adaugat boss');
        return { ...rocket, reserved: true };
      });
      return [...newState];
    default:
      return state;
  }
}

export const fetchRockets = () => async (dispatch) => {
  let rocketList = [];
  let rocketUpdated = [];
  await fetch(URL)
    .then((response) => response.json())
    .then((data) => { rocketList = data; });
  rocketList.forEach((rocket) => {
    rocketUpdated = [...rocketUpdated, {
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      img: rocket.flickr_images[0],
    }];
  });
  dispatch(addRocket(rocketUpdated));
};
