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
			<div>{eventDetails.eventDate}</div>
			<div>{eventDetails.eventStart}</div>
			<div>{eventDetails.eventEnd}</div>
			<div>{eventDetails.contact}</div>
			<div className='eventImage'>
				<img src={eventDetails.poster} />
			</div>
			<div>{eventDetails.description}</div>
			<div></div>
			<div></div>
		</div>
	)
}
