import React from 'react';
import PropTypes from 'prop-types';
import Watch from './Watch';
import WatchModel from '../models/WatchModel';

function WatchesList(props) {

 const { watchesList, deleteWatchHandler } = props;

 return (
  <div className="WatchesList">
   {watchesList.map((watch) => <Watch key={watch.id}
    watch={watch}
    deleteWatchHandler={deleteWatchHandler} />)}
  </div>
 );
}

WatchesList.propTypes = {
 watchesList: PropTypes.arrayOf(WatchModel()).isRequired,
 deleteWatchHandler: PropTypes.func.isRequired
}

export default WatchesList;