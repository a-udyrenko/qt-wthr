import './Today.scss';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

const Today = () => {
  const {
  } = useContext(AppContext);

  return (
    <div className="qtw-today">
      <div>QT Today</div>
    </div>
  );
}

export default Today;
