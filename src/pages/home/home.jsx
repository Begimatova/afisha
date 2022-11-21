import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card } from '../../components/card/card'
import { Categories } from '../../components/categories/categories'
import { EventFilter } from '../../components/eventFilter/eventFilter'
import { setEvents } from '../../redux/filter/filterSlice'
import { EventInfo } from '../eventInfo/eventInfo'
import './home.scss'
export const Home = () => {
	const categoryModal = useSelector(state => state.filterSlice.categoryModal)
	const activeCategory = useSelector(
		state => state.categorySlice.activeCategory
	)
	const events = useSelector(state => state.filterSlice.events)

	// const [posts, setPosts] = useState([])
	const dispatch = useDispatch()

	useEffect(() => {
		axios
			.get(
				`https://636a04ecb10125b78fce3655.mockapi.io/events?category=${activeCategory.value}`
			)
			.then(response => {
				dispatch(setEvents(response.data))
			})
	}, [activeCategory.value])
	return (
		<div className='wrapper'>
			<EventFilter />
			{categoryModal && <Categories />}
			<div className='eventGrid'>
				{events.map((post, i) => (
					<Link key={i} to={`/event/${i}`}>
						<Card
							imageUrl={post.imageUrl}
							title={post.title}
							eventDate={post.eventDate}
							eventStart={post.eventStart}
							location={post.location}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}
