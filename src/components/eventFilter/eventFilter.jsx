import { useDispatch, useSelector } from 'react-redux'
import '../eventFilter/eventFilter.scss'
import {
	setFilterAll,
	toggleCategoryModal,
} from '../../redux/filter/filterSlice'
import { setActiveCategory } from '../../redux/category/categorySlice'

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

	return (
		<div className='eventFilter'>
			<div
				onClick={onClickAll}
				className={[
					filterAll && filterCategory.label === 'Категории' ? 'active' : '',
					'button',
				].join(' ')}
			>
				Все
			</div>
			<div
				onClick={() => dispatch(toggleCategoryModal())}
				className={[
					filterCategory.label !== 'Категории' && !filterAll ? 'active' : '',
					'button',
				].join(' ')}
			>
				{filterCategory.label}
			</div>
		</div>
	)
}
