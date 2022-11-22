import { CircularProgress, LinearProgress, Pagination } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card } from '../../components/card/card'
import { Categories } from '../../components/categories/categories'
import { EventFilter } from '../../components/eventFilter/eventFilter'
import { setEvents } from '../../redux/event/eventSlice'
import { EventInfo } from '../eventInfo/eventInfo'
import './home.scss'
export const Home = () => {
	const categoryModal = useSelector(state => state.filterSlice.categoryModal)
	const activeCategory = useSelector(
		state => state.categorySlice.activeCategory
	)
	const events = useSelector(state => state.eventSlice.events)

	const [loading, setLoading] = useState(true)
	const dispatch = useDispatch()

	useEffect(() => {
		setLoading(true)
		axios
			.get(
				`https://636a04ecb10125b78fce3655.mockapi.io/events?category=${activeCategory.value}`
			)
			.then(response => {
				dispatch(setEvents(response.data))
				setLoading(false)
			})
	}, [activeCategory.value])
	return (
		<div>
			{loading && <LinearProgress />}
			<div className='wrapper'>
				<EventFilter />
				{categoryModal && <Categories />}
				<div className='eventGrid'>
					{loading ? (
						<Box
							sx={{
								height: '100%',
								width: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<CircularProgress variant='indeterminate' />
						</Box>
					) : events.length ? (
						events.map(post => (
							<Link key={post.id} to={`/event/${post.id}`}>
								<Card
									imageUrl={post.imageUrl}
									title={post.title}
									eventDate={post.eventDate}
									eventStart={post.eventStart}
									location={post.location}
								/>
							</Link>
						))
					) : (
						'мероприятий нет..'
					)}
				</div>
				<Pagination count={10} color='primary' />
			</div>
		</div>
	)
}
