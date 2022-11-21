import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	filterAll: true,
	categoryModal: false,
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
	},
})

export const { setFilterAll, toggleCategoryModal } = filterSlice.actions
export default filterSlice.reducer
