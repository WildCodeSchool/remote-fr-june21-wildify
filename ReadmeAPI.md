Les routes API :

Return Artist details from artist name
search.php?s={Artist name}
Example - theaudiodb.com/api/v1/json/1/search.php?s=coldplay

Return Discography for an Artist with Album names and year only
discography.php?s={Artist_Name}
Example - theaudiodb.com/api/v1/json/{APIKEY}/discography.php?s=coldplay

Return individul Artist details using known TADB_Artist_ID
artist.php?i={artistid}
Example - theaudiodb.com/api/v1/json/{APIKEY}/artist.php?i=112024

Return All Albums for an Artist using known TADB_Artist_ID
album.php?i={artistid}
Example - theaudiodb.com/api/v1/json/{APIKEY}/album.php?i=112024

Return individual Album info using known TADB_Album_ID
album.php?m={albumid}
Example - theaudiodb.com/api/v1/json/{APIKEY}/album.php?m=2115888

Return All Tracks for Album from known TADB_Album_ID
track.php?m={albumid}
Example - theaudiodb.com/api/v1/json/{APIKEY}/track.php?m=2115888

Return individual track info using a known TADB_Track_ID
track.php?h={trackid}
Example - theaudiodb.com/api/v1/json/{APIKEY}/track.php?h=32793500

Return all the Music videos for a known TADB_Artist_ID
mvid.php?i=(artistid}
Example - theaudiodb.com/api/v1/json/{APIKEY}/mvid.php?i=112024
