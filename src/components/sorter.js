import React from 'react';

const Sorter = ({ currentSelection, onSelect }) => {
  const getValueFromParams = ({ type, order }) => `${type}-${order}`;
  const getParamsFromValue = (value) => value.split('-');
  return (
    <div className='sorter'>
      <select value={getValueFromParams(currentSelection)}
              onChange={(event) => onSelect(...getParamsFromValue(event.target.value))}>
        <option value='voteScore-descending'>Score: Highest to lowest</option>
        <option value='voteScore-ascending'>Score: Lowest to highest</option>
        <option value='timestamp-descending'>Posted Date: Newest to oldest</option>
        <option value='timestamp-ascending'>Posted Date: Oldest to newest</option>
      </select>
    </div>
  )
}

export default Sorter;