const {
    Navigation,
    State,
    RouteHandler
    } = ReactRouter;


// true if we should show an error dialog when there is a connection error.
// Exists so that we don't show a connection error dialog when the app is just
// starting and hasn't had a chance to connect yet.
const ShowConnectionIssues = new ReactiveVar(false);

const CONNECTION_ISSUE_TIMEOUT = 5000;


// Only show the connection error box if it has been 5 seconds since
// the app started
setTimeout(function () {
    // Show the connection error box
    ShowConnectionIssues.set(true);
    console.log('Disconnected from server !');
}, CONNECTION_ISSUE_TIMEOUT);


// This component handles making the subscriptons to globally necessary data,
// handling router transitions based on that data, and rendering the basic app
// layout
AppBody = React.createClass({
    mixins: [Navigation, State],

    getInitialState() {
        return {
        };
    },

    render() {
        return (
            <div id="container">
                <RouteHandler />
            </div>
        );
    }
});
