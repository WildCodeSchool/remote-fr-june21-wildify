## Last FM
Lien documentation : https://www.last.fm/api/intro

Lien root : http://ws.audioscrobbler.com/2.0/

Exemple utilisation api key .env.local:
api_key=${process.env.REACT_APP_API_KEY}


### artist.search

/2.0/?method=artist.search&artist=cher&api_key=YOUR_API_KEY&format=json

Params
- limit (Optional) : The number of results to fetch per page. Defaults to 30.
- page (Optional) : The page number to fetch. Defaults to first page.
- artist (Required) : The artist name
- api_key (Required) : A Last.fm API key.

### album.search

/2.0/?method=album.search&album=believe&api_key=YOUR_API_KEY&format=json

Params
- limit (Optional) : The number of results to fetch per page. Defaults to 30.
- page (Optional) : The page number to fetch. Defaults to first page.
- album (Required) : The album name
- api_key (Required) : A Last.fm API key.

### track.search

/2.0/?method=track.search&track=Believe&api_key=YOUR_API_KEY&format=json

Params
- limit (Optional) : The number of results to fetch per page. Defaults to 30.
- page (Optional) : The page number to fetch. Defaults to first page.
- track (Required) : The track name
- artist (Optional) : Narrow your search by specifying an artist.
- api_key (Required) : A Last.fm API key.


## Chart

### chart.getTopArtists

/2.0/?method=chart.gettopartists&api_key=YOUR_API_KEY&format=json

Params
- page (Optional) : The page number to fetch. Defaults to first page.
- limit (Optional) : The number of results to fetch per page. Defaults to 50.
- api_key (Required) : A Last.fm API key.

### chart.getTopTracks

/2.0/?method=chart.gettoptracks&api_key=YOUR_API_KEY&format=json

Params
- page (Optional) : The page number to fetch. Defaults to first page.
- limit (Optional) : The number of results to fetch per page. Defaults to 50.
- api_key (Required) : A Last.fm API key.


## Par pays

### geo.getTopArtists

/2.0/?method=geo.gettopartists&country=spain&api_key=YOUR_API_KEY&format=json

Params
- country (Required) : A country name, as defined by the ISO 3166-1 country names standard
- limit (Optional) : The number of results to fetch per page. Defaults to 50.
- page (Optional) : The page number to fetch. Defaults to first page.
- api_key (Required) : A Last.fm API key.

### geo.getTopTracks

/2.0/?method=geo.gettoptracks&country=spain&api_key=YOUR_API_KEY&format=json

Params
- country (Required) : A country name, as defined by the ISO 3166-1 country - names standard
- location (Optional) : A metro name, to fetch the charts for (must be within - the country specified)
- limit (Optional) : The number of results to fetch per page. Defaults to 50.
- page (Optional) : The page number to fetch. Defaults to first page.
- api_key (Required) : A Last.fm API key.
