import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	filterAll: true,
	categoryModal: false,
	events: [],
}

export const filterSlice = createSlice({
	name: 'eventFilter',
	initialState,
	reducers: {
		setFilterAll: (state, action) => {
			state.filterAll = action.payload
		},
		toggleCategoryModal: state => {
			state.categoryModal = !state.categoryModal
		},
		setEvents: (state, action) => {
			state.events = action.payload
		},
	},
})

export const { setFilterAll, toggleCategoryModal, setEvents } =
	filterSlice.actions
export default filterSlice.reducer
