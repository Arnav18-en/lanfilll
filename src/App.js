import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages/about';
import Blogs from './components/pages/blogs';
import SignUp from './components/pages/signup';
// import Contact from './components/pages/contact';
import Abstract from './components/pages/about';
import Survey from './components/pages/survey'

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route  path='/' exact element={<Home />} />
		<Route path='/about' element={<About/>} />
		{/* <Route path='/contact' element={<Contact/>} /> */}
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/sign-up' element={<SignUp/>} />
		<Route path='/abstract' element={<Abstract/>} />
		
		<Route path='/survey' element={<Survey/>} />
	</Routes>
	</Router>
);
}

export default App;

