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

### artist.getinfo

/2.0/?method=artist.getinfo&artist=Cher&api_key=YOUR_API_KEY&format=json

- Params
- artist (Required (unless mbid) : The artist name
- mbid (Optional) : The musicbrainz id for the artist
- lang (Optional) : The language to return the biography in, expressed as an ISO 639 alpha-2 code.
- autocorrect[0|1] (Optional) : Transform misspelled artist names into correct artist names, returning the correct version instead. The corrected artist name will be returned in the response.
- username (Optional) : The username for the context of the request. If supplied, the user's playcount for this artist is included in the response.
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

#### track.getInfo

/2.0/?method=track.getInfo&api_key=YOUR_API_KEY&artist=cher&track=believe&format=json

Params
- mbid (Optional) : The musicbrainz id for the track
- track (Required (unless mbid) : The track name
- artist (Required (unless mbid) : The artist name
- username (Optional) : The username for the context of the request. If supplied, the user's playcount for this track and whether they have loved the track is included in the response.
- autocorrect[0|1] (Optional) : Transform misspelled artist and track names into correct artist and track names, returning the correct version instead. The corrected artist and track name will be returned in the response.
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
