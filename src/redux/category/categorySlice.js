import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	activeCategory: {
		label: 'Категории',
		value: '',
	},
}

export const categorySlice = createSlice({
	name: 'categoryFilter',
	initialState,
	reducers: {
		setActiveCategory: (state, action) => {
			state.activeCategory = action.payload
		},
	},
})

export const { setActiveCategory } = categorySlice.actions
export default categorySlice.reducer
