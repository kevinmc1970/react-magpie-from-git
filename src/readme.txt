this app uses redux to handle state

index.js gets the store from /store/index.js (which in turn sets the rootReducer) and passes it to the Provider HOC
(and sets App.js as the starting point for the app)

App.js connects to the redux store and passes in the mapStateToProps and mapDispatchToProps functions
- mapDispatchToProps basically maps App's props to a dispather 
( so any changes in store store refelcted back in props )
- mapStateToProps basically maps redux store back to the App's props
( so any changes in props calls dispather to update store )

ComponentDidMount method gets the data from ebay (except currently mocked instead )
( shows that complicated method that doesn't return JSX not in render() )

clicking on item puts it in the props.getCurrentItem which will be store in redux (because of mapping above )
because state/store changed then render called which checks if props.getCurrentItem not null and redirects to /itemid
to trigger routing
the component routed to will then displaye the item details 
(the Details component props are mapped to the store and gets the item object from there)
IN OTHER WORDS WE HAVE USED REDUX TO PASS STATE BETWEEN COMPONENTS

The AppRedux component is really a different part of the app which shows setting values in the redux store using a form
( can get to it by simply going to /redux)

