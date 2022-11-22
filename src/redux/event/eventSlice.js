import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	events: [],
	eventInfo: {},
}

export const eventSlice = createSlice({
	name: 'eventInfo',
	initialState,
	reducers: {
		setEvents: (state, action) => {
			state.events = action.payload
		},
		setEventInfo: (state, action) => {
			state.eventInfo = action.payload
		},
	},
})

export const { setEvents, setEventInfo } = eventSlice.actions
export default eventSlice.reducer
