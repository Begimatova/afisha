import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/home'
import { EventInfo } from './pages/eventInfo/eventInfo'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/event/:id' element={<EventInfo />} />
		</Routes>
	)
}
