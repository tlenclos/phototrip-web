const {
    Route,
    NotFoundRoute,
    DefaultRoute
} = ReactRouter;

const routes = (
    <Route name="root" handler={AppBody} path="/">
        <DefaultRoute handler={Map} />
        <NotFoundRoute handler={AppNotFound} />
    </Route>
);

const router = ReactRouter.create({
    routes: routes,
    location: ReactRouter.HistoryLocation
});

Meteor.startup(function () {
    router.run(function (Handler, state) {
        React.render(<Handler/>, document.getElementById("app-container"));
    });
});
