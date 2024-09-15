import React from 'react';
import AddWatchForm from './AddWatchForm';
import WatchesList from './WatchesList';

function WatchesApp() {

 const [watches, setWatches] = React.useState([]);

 const addWatchHandler = (watch) => {
  setWatches(prevWatches => [...prevWatches, watch]);
 };

 const deleteWatchHandler = (watch) => {
  setWatches(prevWatches => prevWatches.filter(o => o.id !== watch.id));
 };

 return (
  <div className="Watches">
   <div className="watches__container">
    <AddWatchForm addWatchHandler={addWatchHandler} />
    <WatchesList watchesList={watches} deleteWatchHandler={deleteWatchHandler} />
   </div>
  </div>
 );
}

export default WatchesApp;