import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { missions: [], status: 'idle' };

export const getMissions = createAsyncThunk(
  'missions/GetMissions',
  async () => {
    try {
      const initialState = await axios.get(
        'https://api.spacexdata.com/v3/missions',
      );
      return initialState.data;
    } catch (error) {
      return error?.response;
    }
  },
);

const MissionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    missionStatus: (state, { payload }) => {
      const st = state;
      st.missions = st.missions.map((obj) => (obj.mission_id === payload
        ? { ...obj, joined: !obj.joined }
        : obj));
    },
  },
  extraReducers: (Builder) => {
    Builder.addCase(getMissions.pending, (state) => ({
      ...state,
      status: 'pending',
    }))
      .addCase(getMissions.fulfilled, (state, action) => {
        const st = state;
        st.status = 'fulfilled';
        const modifiedFectedData = action.payload.map((object) => ({
          ...object,
          joined: false,
        }));
        st.missions = modifiedFectedData;
      })
      .addCase(getMissions.rejected, (state, { error }) => ({
        ...state,
        status: error,
      }));
  },
});

export const { missionStatus } = MissionSlice.actions;
export const everyMissions = (state) => state.missions;

export default MissionSlice.reducer;
