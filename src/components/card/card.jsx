import dayjs from 'dayjs'
import './card.scss'
import 'dayjs/locale/ru'

export const Card = ({ imageUrl, title, eventDate, eventStart, location }) => {
	const parsedDate = dayjs(eventDate, {
		locale: 'ru',
	}).format('D MMMM')
	return (
		<div className='card'>
			<img className='card-image' src={imageUrl} alt='place' />
			<h4 className='card-title'>{title}</h4>
			<p className='card-eventDate'>
				{parsedDate} в {eventStart}, {location}
			</p>
		</div>
	)
}
