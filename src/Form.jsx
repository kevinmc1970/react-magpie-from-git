import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addArticle } from './js/actions/index';

// map the name of the props methods to dispatch actions in the store
// so when method called on prop the mapped dispatch happens too
function mapDispatchToProps(dispatch) {
    return {
        // this is the name(s) of the props methods to map to store i.e. this.props.addArticleItem
        addArticleItem: article => dispatch(addArticle(article))
    };
}

class ConnectedForm extends Component {
    constructor() {
        super();

        // can still use local state (this component might have state that is not required elsewhere)
        this.state = {
            title: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // id= title in the input element and value is whatever is typed
        // decided this was a mad way to do this as [event.target.id] can only be 'title'
        this.setState( { [event.target.id]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        // const { title } = this.state; // just set var title to = title in state object (destructuring assignment)
        const title = this.state.title; // get title from local state set in handleChange
        const uuid = uuidv1();
        // props methods are mapped to redux so this will call the dispatch at the top of code
        this.props.addArticleItem( { title, uuid });
        // N.B. mapping means that props.articles would be the store's state.articles value
        // reset the local state
        this.setState( { title: ''});
    }

    render() {
        console.log('in Form render - notice that it is rendered on each key press and on submit as state is reset')
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">SAVE</button>
            </form>
        );
    }
}
// null param here as there is no mapStateToProps in this component
const Form = connect(null, mapDispatchToProps) (ConnectedForm);

export default Form;