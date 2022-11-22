import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filter/filterSlice'
import categorySlice from './category/categorySlice'
import eventSlice from './event/eventSlice'
export const store = configureStore({
	reducer: {
		filterSlice,
		categorySlice,
		eventSlice,
	},
})
