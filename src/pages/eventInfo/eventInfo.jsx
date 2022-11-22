import { Card, CardContent, CardHeader } from '@mui/material'
import axios from 'axios'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { setEventInfo } from '../../redux/event/eventSlice'
import './eventInfo.scss'

export const EventInfo = () => {
	const dispatch = useDispatch()
	const { id } = useParams()

	const eventDetails = useSelector(state => state.eventSlice.eventInfo)

	useEffect(() => {
		axios
			.get(`https://636a04ecb10125b78fce3655.mockapi.io/events/${id}`)
			.then(response => {
				dispatch(setEventInfo(response.data))
			})
	}, [id])

	return (
		<div className='wrapper'>
			<div className='eventImage'>
				<img src={eventDetails.imageUrl} />
				<div className='eventTitle'>{eventDetails.title}</div>
			</div>
			<div className='eventContent'>
				<div className='eventPoster'>
					<img src={eventDetails.poster} />
				</div>
				<Card sx={{ height: 300, width: '30%' }}>
					<CardContent className='data'>
						<div>Дата:{eventDetails.eventDate}</div>
						<div>Начало:{eventDetails.eventStart}</div>
						<div>Конец:{eventDetails.eventEnd}</div>
						<div>
							Контакты:
							<a href={eventDetails.contact}>{eventDetails.contact}</a>
						</div>
					</CardContent>
				</Card>
			</div>

			<div className='discription'>{eventDetails.description}</div>
		</div>
	)
}
