import { createSlice } from '@reduxjs/toolkit';
import { parksData, communityGardensData, publicArtData, testEvents } from '../../Data/data';

export const listSlice = createSlice({
    name: "list",
    initialState: {
        type: '',
        listContents: [],
        listFilter: {},
    },
    reducers: {
        changeType: (state, action) => {
            state.type = action.payload
            if (action.payload === 'parks') {
                state.listContents = parksData
            } else if (action.payload === 'events') {
                state.listContents = testEvents
            } else if (action.payload === 'communityGardens') {
                state.listContents = communityGardensData
            } else if (action.payload === 'publicArt') {
                state.listContents = publicArtData
            }
        },
        filterList: {},
    }
  });

  export const selectList = (state) => state.listContents

  export const {
    changeType,
 } = listSlice.actions;
 
 export default listSlice.reducer;