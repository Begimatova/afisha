import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filter/filterSlice'
import categorySlice from './category/categorySlice'
export const store = configureStore({
	reducer: {
		filterSlice,
		categorySlice,
	},
})
