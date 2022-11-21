import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/home'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	)
}
