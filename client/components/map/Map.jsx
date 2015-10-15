const {
    Navigation,
    State,
    RouteHandler
    } = ReactRouter;


Map = React.createClass({
    mixins: [Navigation, State],

    getInitialState() {
        return {
        };
    },

    render() {
        return (
            <div>
                THE MAP
            </div>
        );
    }
});
