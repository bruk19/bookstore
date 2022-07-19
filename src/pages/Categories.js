
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div className="categories-section">
      <h2>{categories}</h2>
      <button type="button" onClick={() => dispatch(checkStatus())} className="add-book-btn">Check status</button>
    </div>
  );
};

export default Categories;