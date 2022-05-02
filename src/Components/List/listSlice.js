import { createSlice } from '@reduxjs/toolkit';
import {parksData, 
        basketballCourts, 
        testEvents, 
        tennisCourts,
        baseballData,
        ballHockeyData,
        litFieldData } from '../../Data/data';

export const listSlice = createSlice({
    name: "list",
    initialState: {
        type: '',
        data: [],
        listFilter: {},
        filteredList: [],
        selected: 0,
    },
    reducers: {
        changeType: (state, action) => {
            state.type = action.payload
            switch (action.payload) {
                case 'parks':
                    state.data = parksData
                    break
                case 'events':
                    state.data = testEvents
                    break
                case 'basketball':
                    state.data = basketballCourts
                    break
                case 'tennis':
                    state.data = tennisCourts
                    break
                case 'baseball':
                    state.data = baseballData
                    break
                case 'ballHockey':
                    state.data = ballHockeyData
                    break
                case 'litField':
                    state.data = litFieldData
                    break
            }
            state.filteredList = []
                state.listFilter = {}
                state.data.forEach((local) => state.filteredList.push(local))
        },
        filterList: (state, action) => {
            state.filteredList = []
            state.listFilter[action.payload[0]] = action.payload[1]
            const keys = Object.keys(state.listFilter)

            const newList = state.data.filter((local) => {
                let matches =[]
                for(let i=0; i<keys.length; i++){
                    if (local[keys[i]] === state.listFilter[keys[i]] || state.listFilter[keys[i]] === 'any'){
                        matches.push(true)
                    } else {
                        matches.push(false)
                    }
                }
                return matches.every(item => item === true) 
            })
            console.log(newList)
            newList.forEach((local) => state.filteredList.push(local))
        },
        eventAdded(state, action) {
            state.data.push(action.payload)
        },
        changeSelected(state, action) {
            state.selected = Number(action.payload)
        }
    }
  });

  export const {
    changeType,
    filterList,
    eventAdded,
    changeSelected,
 } = listSlice.actions;
 
 export default listSlice.reducer;