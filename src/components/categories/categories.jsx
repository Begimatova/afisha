import './categories.scss'
import close from '../../assets/images/png/close.png'
import {
	setFilterAll,
	toggleCategoryModal,
} from '../../redux/filter/filterSlice'
import { useDispatch } from 'react-redux'
import { setActiveCategory } from '../../redux/category/categorySlice'

const CATEGORIES = {
	exhibition: 'Выставки',
	cinema: 'Кино',
	concerts: 'Концерты',
	performance: 'Спектакль',
	ballet: 'Балет',
	leisure: 'Активный отдых',
	tourism: 'Туризм',
	seminar: 'Семинар, мастер-класс, форум',
	filmScreenings: 'Кинопоказы',
	festival: 'Фестиваль',
	show: 'Шоу',
}

export const Categories = () => {
	const dispatch = useDispatch()

	const onSetCategory = category => {
		dispatch(setActiveCategory(category))
		dispatch(setFilterAll(false))
		dispatch(toggleCategoryModal())
	}

	return (
		<div className='categories'>
			<div className='categoryList'>
				<div className='closeIcon'>
					<img
						src={close}
						width='16px'
						height='16px'
						onClick={() => dispatch(toggleCategoryModal())}
					/>
				</div>
				<ul>
					{Object.entries(CATEGORIES).map(([category, label]) => (
						<li
							key={category}
							onClick={() => onSetCategory({ label, value: category })}
						>
							{label}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
