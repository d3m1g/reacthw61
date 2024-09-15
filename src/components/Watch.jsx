import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import WatchModel from '../models/WatchModel';

class Watch extends React.Component {

 static propTypes = {
  watch: WatchModel().isRequired,
  deleteWatchHandler: PropTypes.func.isRequired
 }

 constructor(props) {
  super(props);
  this.state = { date: new Date() };
 }

 handleDelete = evt => {
  evt.preventDefault();
  this.props.deleteWatchHandler(this.props.watch);
 }

 componentDidMount() {
  this.timerId = setInterval(() => this.tick(), 1000);
 }

 componentWillUnmount() {
  clearInterval(this.timerId);
 }

 tick() {
  this.setState({
   date: new Date()
  });
 }


 formatTime(date, utcOffset) {
  return moment(date).utc().utcOffset(utcOffset).format("HH:mm:ss");
 }

 render() {
  const { watch } = this.props;
  return (
   <div className="Watch">
    <div className="watch__title">
     <div className="watch__name">
      {watch.name}
     </div>
     <div className="watch__delete-button">
      <a href="/" onClick={this.handleDelete}>✘</a>
     </div>
    </div>
    <div className="watch__time">
     {this.formatTime(this.state.date, this.props.watch.utcOffset)}
    </div>
   </div>
  );
 }
}

export default Watch;