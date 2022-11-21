import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../../components/card/card'
import { Categories } from '../../components/categories/categories'
import { EventFilter } from '../../components/eventFilter/eventFilter'
import './home.scss'
export const Home = () => {
	const categoryModal = useSelector(state => state.filterSlice.categoryModal)
	const activeCategory = useSelector(
		state => state.categorySlice.activeCategory
	)

	const [posts, setPosts] = useState([])

	useEffect(() => {
		axios
			.get(
				`https://636a04ecb10125b78fce3655.mockapi.io/events?category=${activeCategory.value}`
			)
			.then(response => {
				setPosts(response.data)
			})
	}, [activeCategory.value])
	return (
		<div className='wrapper'>
			<EventFilter />
			{categoryModal && <Categories />}
			<div className='eventGrid'>
				{posts.map((post, i) => (
					<Card
						key={i}
						imageUrl={post.imageUrl}
						title={post.title}
						eventDate={post.eventDate}
						eventStart={post.eventStart}
						location={post.location}
					/>
				))}
			</div>
		</div>
	)
}
