import { useDispatch, useSelector } from 'react-redux'
import '../eventFilter/eventFilter.scss'
import {
	setFilterAll,
	toggleCategoryModal,
} from '../../redux/filter/filterSlice'
import { setActiveCategory } from '../../redux/category/categorySlice'
import { Button, TextField } from '@mui/material'

export const EventFilter = () => {
	const filterAll = useSelector(state => state.filterSlice.filterAll)
	const filterCategory = useSelector(
		state => state.categorySlice.activeCategory
	)

	const dispatch = useDispatch()

	const onClickAll = () => {
		dispatch(setFilterAll(true))
		dispatch(setActiveCategory({ label: 'Категории', value: '' }))
	}

	const onClickCategory = () => {
		dispatch(toggleCategoryModal())
	}

	console.log(filterCategory)
	return (
		<div className='eventFilter'>
			<div className='filters'>
				<Button
					size='small'
					variant={
						filterAll && filterCategory.label === 'Категории'
							? 'contained'
							: 'outlined'
					}
					onClick={onClickAll}
					sx={{
						marginRight: 2,
					}}
				>
					Все
				</Button>
				<Button
					size='small'
					variant={
						filterCategory.label !== 'Категории' && !filterAll
							? 'contained'
							: 'outlined'
					}
					onClick={onClickCategory}
				>
					{filterCategory.label}
				</Button>
			</div>
			<div>
				<TextField
					size='small'
					id='outlined-search'
					label='поиск'
					type='search'
				/>
			</div>
		</div>
	)
}
