import { InfinitySpin } from 'react-loader-spinner';
import style from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={style.loader}>
      <InfinitySpin
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#51E5FF"
        visible={true}
      />
    </div>
  );
};
