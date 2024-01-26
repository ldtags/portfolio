import Helmet from 'react-helmet';

import './Portfolio.scss';
import SiteNav from './SiteNav';
import Introduction from './intro/Introduction';
import About from './about/About';


export default function Portfolio() {
  return (
    <div className='portfolio'>
      <Helmet>
        <meta name="current-page" content="Portfolio home page" />
      </Helmet>
      <SiteNav />
      <Introduction />
      {/* <About /> */}
    </div>
  );
}
