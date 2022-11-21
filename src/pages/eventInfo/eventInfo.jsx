import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import './eventInfo.scss'

export const EventInfo = () => {
	const { id } = useParams()

	const events = useSelector(state => state.filterSlice.events)
	const eventDetails = events[Number(id)]
	console.log(events)

	return (
		<div className='wrapper'>
			<div className='eventTitle'>{eventDetails.title}</div>
			<div className='eventImage'>
				<img src={eventDetails.imageUrl} />
			</div>

			<div className='eventPoster'>
				<img src={eventDetails.poster} />
			</div>

			<div className='discription'>{eventDetails.description}</div>
			<div className='data'>
				<div>ДАТА:{eventDetails.eventDate}</div>
				<div>НАЧАЛО:{eventDetails.eventStart}</div>
				<div>КОНЕЦ:{eventDetails.eventEnd}</div>
				<div>КОНТАКТЫ:{eventDetails.contact}</div>
			</div>
		</div>
	)
}
