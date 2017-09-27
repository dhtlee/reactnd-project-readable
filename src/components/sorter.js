import React from 'react';
import { connect } from 'react-redux';

import { setSortBy } from 'actions';
import SortLink from './sort-link';

const Sorter = ({ sortBy, setSortBy }) => {
  return (
    <div className='content-sort'>
      Sort by:
      <SortLink
        sortBy='voteScore'
        currentSortBy={sortBy}
        onClick={(sortBy) => setSortBy(sortBy)}>
        Vote Score
      </SortLink>
      ,
      <SortLink
        sortBy='timestamp'
        currentSortBy={sortBy}
        onClick={(sortBy) => setSortBy(sortBy)}>
        Posted Time
      </SortLink>
    </div>
  )
}

const mapStateToProps = (state) => ({
  sortBy: state.sortBy
})

const mapDispatchToProps = (dispatch) => ({
  setSortBy: (sortBy) => dispatch(setSortBy(sortBy))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sorter);