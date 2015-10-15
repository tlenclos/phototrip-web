var Api = new Restivus({
    prettyJson: true
});

Api.addRoute('locations', {authRequired: false}, {
    get: function() {
        return Locations.find().fetch();
    },
    post: function () {
        console.log('body params', this.bodyParams);
        var data = this.bodyParams;

        if (data.lat && data.lng) {
            var locationId = Locations.insert({lat: data.lat, lng: data.lng, note: data.note});

            return {
                statusCode: 201,
                body: Locations.findOne(locationId)
            };
        } else {
            return {
                statusCode: 400,
                body: {status: 400, message: 'Bad request'}
            };
        }
    }
});
