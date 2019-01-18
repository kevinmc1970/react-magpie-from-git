import React from 'react';
import { connect } from 'react-redux';

// map this component state to the store - in other words the store takes over this state and keeps it in-sync
const mapStateToProps = state => {
    return { articles: state.articles };
};

// get the articles list from the store and display them
const ConnectedList = ({articles}) => (
    <ul className="list-group list-group-flush">
        {articles.map(el => (
            <li className="list-group-item" key={el.uuid}>
                {el.title}
            </li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;