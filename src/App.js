import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/home'
import { EventInfo } from './pages/eventInfo/eventInfo'
import { NotFound } from './pages/notFound/notFound'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='*' element={<NotFound />} />
			<Route path='/event/:id' element={<EventInfo />} />
		</Routes>
	)
}
