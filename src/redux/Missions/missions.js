import { createAsyncThunk } from 'reduxjs/toolkit';
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

export const URL = 'https://api.spacexdata.com/v3/missions';

const initialState = { missions: {}, status: 'idle' };

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    try {
      const initialState = await axios.get(`${URL}`);
      return initialState.data;
    } catch (error) {
      return error?.response;
    }
  }
);

const MissionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    missionStatus: (state, { paylad }) => {
      const newState = state.missions.map((info) =>
        info.mission_id === paylad ? { ...info, joined: !info.joined } : info
      );
      return {
        ...state,
        mission: newState,
      };
    },
  },
  extraReducers: (Builder) => {
    Builder.addCase(getMissions.pending, (state) => ({
      ...state,
      status: 'pending',
    }))
      .addCase(getMissions.fulfiled, (state, action) => {
        const info = [];
        action.paylad.map((mission) => {
          const { mission_id, description, mission_name } = mission;
          info.push({
            mission_id,
            description,
            mission_name,
            joined: false,
          });
          return info;
        });
        return {
          ...state,
          mission: info,
          status: 'idle',
        };
      })
      .addCase(getMissions.rejected, (state) => ({
        ...state,
        status: 'error',
      }));
  },
});

export const { missionStatus } = MissionSlice.actions;
export const everyMissions = (state) => state.mission;

export default MissionSlice.reducer;
