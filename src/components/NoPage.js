import './NoPage.scss'
import not_found from '../assets/404_error.avif'

export default function NoPage() {
  return (
    <div className='no-page'>
      <div className='center-page'>
        <img
          alt="404 Error"
          src={not_found}
          className="not-found"
        />
      </div>
    </div>
  );
}