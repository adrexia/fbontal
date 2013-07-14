require.def("sampleapp/datasources/facebook/albumphotos",
    [
        "antie/class",
        "sampleapp/datasources/facebook/base"
    ],
    function(Class, FacebookDataSourceBase) {
        return FacebookDataSourceBase.extend({

            url: 'https://graph.facebook.com/:albumId/photos',

            init: function(component, obj, func, args) {
                this._super(component, obj, func, args, 'albumphotos');
                this._albumId = '';
            },

            setAlbumId: function(albumId) {
                console.log('setting album id', albumId);
                this._albumId = albumId;
            },

            getUrl: function () {
                return this._fillUrlParams(this.url, {
                    albumId: this._albumId
                });
            }

        });
    }
);