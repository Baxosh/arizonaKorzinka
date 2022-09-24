import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchBar from './componenets/SearchBar'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} exact />
				<Route path="*" element={<ErrorPage />} exact />
				<Route path='search' element={<SearchBar />} exact />
			</Routes>
		</BrowserRouter>
	)
}
