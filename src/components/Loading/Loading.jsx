import CloudIcon from './CloudIcon';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="qtw-loading">
      <div className="qtw-loading__sun"></div>
      <div className="qtw-loading__cloud">
        <CloudIcon />
        <div className="qtw-loading__label">Loading</div>
      </div>
    </div>
  );
}

export default Loading;
