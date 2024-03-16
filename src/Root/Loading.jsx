
import ClockLoader from 'react-spinners/ClockLoader';
import './loading.css';

const Loading = ({ loading }) => {
  return (
    <div className='loadingScreen'>
      <ClockLoader
        color={'#4F46E5'} // 
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
