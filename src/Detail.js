import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { currentItem: state.currentItem };
  };

const DisplayDetails = ({currentItem}) => (<div><h1>Detail - {currentItem.title}</h1></div>);
{/* <h2>{props.match.params.id}</h2></div>; */}

// connect(mapStateToProps) created then it is called with (DisplayDetails)
// use this construct when running anonymous function just once
const Detail = connect(mapStateToProps)(DisplayDetails);

export default Detail;