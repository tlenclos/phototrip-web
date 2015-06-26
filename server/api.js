Restivus.configure({
    prettyJson: true
});

Restivus.addRoute('locations', {authRequired: false}, {
    get: function() {
        return Locations.find().fetch();
    },
    post: function () {
        console.log('body params', this.bodyParams);
        var data = this.bodyParams;

        if (data.lat && data.lng) {
            Locations.insert({lat: data.lat, lng: data.lng});
            return {
                statusCode: 201,
                body: {status: 201, message: 'Location created'}
            };
        } else {
            return {
                statusCode: 400,
                body: {status: 400, message: 'Bad request'}
            };
        }
    }
});
