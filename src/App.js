import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import './App.scss';
import Layout from './components/Layout';
import Portfolio from './portfolio/Portfolio';
import NoPage from './components/NoPage'


export default function App() {
  return (
		<div className='app'>
			<ParallaxProvider>
				<BrowserRouter>
    		  <Routes>
    		    <Route path='/' element={<Layout />}>
    		      <Route index element={<Portfolio />} />
    		      <Route path='*' element={<NoPage />} />
    		    </Route>
    		  </Routes>
    		</BrowserRouter>
			</ParallaxProvider>
		</div>
  );
}
