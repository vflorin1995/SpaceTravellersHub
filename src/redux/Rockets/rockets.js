const ADDROCKET = 'ADDROCKET';
const URL = 'https://api.spacexdata.com/v3/rockets/';

export function addRocket(payload) {
  return {
    type: ADDROCKET,
    payload,
  };
}

export default function Rockets(state = [], action = {}) {
  switch (action.type) {
    case ADDROCKET:
      return [
        ...action.payload,
      ];
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
