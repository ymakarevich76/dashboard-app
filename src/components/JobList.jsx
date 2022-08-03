// import data from '../mock/data.json';
import { JobPosition } from './JobPosition';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisiblePositions } from 'store/positions/position-selectors';
import { selectFilters } from 'store/filters/filter-selectors';

import { addFilter } from 'store/filters/filter-actions';

const JobList = () => {
    const dispatch = useDispatch();
    const currentFilters = useSelector(selectFilters);

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter));
    };

    const data = useSelector((state) => selectVisiblePositions(state, currentFilters));
    return (
        <div className='job-list'>
            {data.map((item) => (
                <JobPosition
                    key={item.id}
                    handleAddFilter={handleAddFilter}
                    {...item}
                />
            ))}
        </div>
    );
};

export { JobList };
