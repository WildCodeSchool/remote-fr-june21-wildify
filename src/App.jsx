import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Album from "./component/Album/Album"
import Artist from "./component/Artist/Artist"
import Contact from "./component/Contact/Contact"
import Explore from "./component/Explore/Explore"
import Footer from "./component/Footer/Footer"
import Home from "./component/Home/Home"
import Legal from "./component/Legal/Legal"
import Navbar from "./component/Navbar/Navbar"
import Track from "./component/Track/Track"
import Favoris from "./component/Favoris/Favoris" //Favoris
import useFavoris from "./component/Favoris/useFavoris" //Favoris
// import UserLogin from './component/User/UserLogin'

import "./App.css"

const App = () => {
	const [albumFavoris, toggleAlbumFavoris] = useFavoris("favAlbums")
	const [trackFavoris, toggleTrackFavoris] = useFavoris("favTrack")

	return (
		<div className="appBody">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/explore">
						<Explore />
					</Route>
					<Route path="/artist/:name">
						<Artist />
					</Route>
					<Route path="/album/:albumName/:artistName">
						<Album
							albumFavoris={albumFavoris}
							toggleAlbumFavoris={toggleAlbumFavoris}
						/>
					</Route>
					<Route path="/track/:trackName/:artistName">
						<Track
							trackFavoris={trackFavoris}
							toggleTrackFavoris={toggleTrackFavoris}
						/>
					</Route>
					<Route path="/MyLibrary">
						<Favoris />
					</Route>
					{/* <Route path="/userProfile">
            <UserLogin />
          </Route> */}
					<Route path="/legal">
						<Legal />
					</Route>
					<Route path="/Contact">
						<Contact />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

export default App
