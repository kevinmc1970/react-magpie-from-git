import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import Search from './Search';
import Detail from './Detail';
import { Redirect } from 'react-router';
import { Route, Switch } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import './App.css';
import ReduxTest from './ReduxTest';
import 'bootstrap/dist/css/bootstrap.min.css';
//const jsonp = require('fetch-jsonp');
import { changeCurrentItem } from './js/actions/index';
import { connect } from 'react-redux';

// REDUX uses the component's props not state to map to the store
function mapDispatchToProps(dispatch) {
  return {
      // this is the name(s) of the props methods to map to store i.e. this.props.ChangeCurrentItem
      changeCurrentItem: item => dispatch(changeCurrentItem(item))
  };
}
// N.B. map this component's PROPS not state to the store
const mapStateToProps = state => {
  return { currentItem: state.currentItem };
};

class ConnectedApp extends Component {
  constructor() {
    super();
    // can still use local state alongside Redux - if don't need to share across components
    this.state = {
      title: 'MagpieRetail',
      items: []
    };
    // this.processData = this.processData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // let url = 'https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=KevinMcI-magpiesr-PRD-bf8fc7c73-aeffc832&GLOBAL-ID=EBAY-GB&RESPONSE-DATA-FORMAT=JSON&callback=JSONP_CALLBACK&REST-PAYLOAD&categoryId(1)=11700&categoryId(2)=11450&categoryId(3)=2984&paginationInput.entriesPerPage=300&itemFilter.name=Seller&itemFilter.value=magpieretail1';
    // jsonp(url, {
    //   jsonpCallbackFunction: 'JSONP_CALLBACK',
    //   timeout: 9000,
    // }).then((response) => {
    //   return response.json()
    // }).then(data => {
    //   this.processData(data);
    // }
    // );

    // whilst testing and dont need internet so use mocked data
    this.setState( {items: [
    {"id":'254033426102',
    "title":'Avoca Handweavers Irish Heavy Herringbone Multi Colour Wool Cushion',
    "galleryURL":"https://thumbs3.ebaystatic.com/m/mEddNdUhjfCC7gjKcP1Eb9A/140.jpg",
    "url":"http://www.ebay.co.uk/itm/Avoca-Handweavers-Irish-Heavy-Herringbone-Multi-Colour-Wool-Cushion-/254033426102",
    "value":"30.0", "condition":"New other (see details)","shipping":"3.5"},
    {"id":"253569929056","title":"Roman Conrad presentation 24 piece cutlery set",
    "galleryURL":"https://thumbs1.ebaystatic.com/m/mk8z59Kt-_qWXR19RupHJkQ/140.jpg",
    "url":"http://www.ebay.co.uk/itm/Roman-Conrad-presentation-24-piece-cutlery-set-/253569929056",
    "value":"30.0","condition":"New other (see details)","shipping":"0.0"},
    {"id":"253904853783","title":"John Lewis Design Project No.16 Hand Towel in Pink/Grey  NEW",
    "galleryURL":"https://thumbs4.ebaystatic.com/m/mFz9OS0mExpp3Z8lIMd23Jw/140.jpg",
    "url":"http://www.ebay.co.uk/itm/John-Lewis-Design-Project-No-16-Hand-Towel-Pink-Grey-NEW-/253904853783",
    "value":"8.0","condition":"New","shipping":"0.0"}]
     }
    );
  }

  // processData(json) {
  //   let items = [];
  //   let searchResultItems = json.findItemsByCategoryResponse[0].searchResult[0].item;
  //   for (let item of searchResultItems) {
  //     let itemObject = {
  //       id: item.itemId[0],
  //       title: item.title[0],
  //       galleryURL: item.galleryURL[0].replace("http:", "https:"),
  //       url: item.viewItemURL[0],
  //       value: item.sellingStatus[0].currentPrice[0].__value__,
  //       condition: item.condition[0].conditionDisplayName[0],
  //       shipping: item.shippingInfo[0].shippingServiceCost[0].__value__
  //     }
  //     // console.log(itemObject);
  //     items.push(itemObject);
  //   }
  //   this.setState({ items: items });
  // }

  handleClick(item, e) {
    console.log('inside handleClick - setting item in the store via prop mapped to action')
    e.preventDefault();
    // using redux store mapped to props
    this.props.changeCurrentItem(item);
  }

  // when render called automatically on state (now using Redux store) change this function called and returns a Router Redirect to fire the Route
  // path matching which uses the Detail component (only if PROPS.currentItem not null (N.B. props mapped not state))
  redirectToDetail = () => {
    console.log('inside redirectToDetail - redirect if this.props.currentItem not null')
    if (this.props.currentItem !== null) {
      return (<Redirect push to={'/' + this.props.currentItem.id} />)
    }
  }
  

  render() {
    console.log("In Render (automatically because state changed): " + JSON.stringify(this.state.currentItem));
    // used this for testing
    // let listItems = this.state.items.map((item) =>
    //   <li key={item.id}>{item.title}</li>
    // )

    // create a carousel item for each product in list
    // always add a key value to indentify each item to react when selected/updated etc
    let carouselList = this.state.items.map((item) =>
      <Carousel.Item key={item.id}>
        <div className="row justify-content-center align-items-center bg-dark">
          <div className="col-9 col-sm-6">
            <div className="media" onClick={(event) => this.handleClick(item, event)}>
              <img src={item.galleryURL} className="img-thumbnail mr-3" alt="img"></img>
              <div className="media-body text-white">
                <p className="mt-0 small text-lowercase">{item.title}</p>
                <span>{item.value}</span>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    )

    // moved this into render instead of class as 'simple' and returns JSX
    // it also passes on the Route props (location, history etc) to the Detail component
    const CheckStateThenShowDetail = (props) => {
      if (this.props.currentItem !== null) {
        // console.log('checkStateThenShowDetail: ' + JSON.stringify(this.state.currentItem));
        return (<Detail {...props}/>);
      } else {
        return null
      }
    }

    // The return part of render builds the html from the components and variables above
    // N.B. included hidden route to redux test page
    return (
      <div className="container">
        <Header company={this.state.title} />
        <Carousel indicators={false}>{carouselList}</Carousel>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/redux' component={ReduxTest} />
          <Route path='/:id' component={CheckStateThenShowDetail} />
        </Switch>

        {
          // this function called every time render run i.e. statechange
          this.redirectToDetail()
        }

        <footer className="font-small blue">
          <div className="text-center py-3">© 2018 Copyright: mcintech ltd</div>
        </footer>
      </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps) (ConnectedApp);

export default App;