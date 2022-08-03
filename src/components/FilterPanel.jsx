import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { useSelector, useDispatch } from 'react-redux';

import { selectFilters } from 'store/filters/filter-selectors';
import { removeFilter, clearFilter } from 'store/filters/filter-actions';

const FilterPanel = () => {

  const dispatch = useDispatch();

    const currentFilters = useSelector(selectFilters);
    if (currentFilters.length === 0) {
        return null;
    }

    return (
        <Card className='filter-panel'>
            <div className='filter-panel-wrapper'>
                <Stack>
                    {currentFilters.map((filter) => (
                        <Badge variant='clearable' key={filter} onClear={() => dispatch(removeFilter(filter))}>
                            {filter}
                        </Badge>
                    ))}
                    {/* <Badge variant="clearable">Frontend</Badge>
          <Badge variant="clearable">Backend</Badge>
          <Badge variant="clearable">React</Badge> */}
                </Stack>

                <button className='link' onClick={()=> dispatch(clearFilter)}>
                    Clear
                </button>
            </div>
        </Card>
    );
};

export { FilterPanel };
