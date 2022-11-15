import { createAsyncThunk } from '@reduxjs/toolkit';

const GetMissions = 'missions/GetMissions';
const Missionstatus = 'missions/missionStatus';

const initialState = [];

export const missionStatus = (id) => ({ type: Missionstatus, payload: id });

export const getMissions = createAsyncThunk(GetMissions, async () => {
  const fetchAPI = await fetch('https://api.spacexdata.com/v3/missions/');
  const data = await fetchAPI.json();
  const missions = data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    mission_description: mission.description,
    isJoined: false,
  }));
  return {
    missions,
  };
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GetMissions}/fulfilled`:
      return action.payload.missions;
    default:
      return state;
  }
};

export default missionsReducer;
