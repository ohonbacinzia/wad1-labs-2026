'use strict';
import { v4 as uuidv4 } from 'uuid';

import logger from "../utils/logger.js";
import playlistStore from "../models/playlist-store.js";

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");
    
    const viewData = {
      title: "Playlist App Dashboard",
      playlists: playlistStore.getAllPlaylists()
    };
    
    logger.debug(viewData.playlists);
    
    response.render('dashboard', viewData);
  },
 addPlaylist(request, response) {
    const timestamp = new Date();
    
    const newPlaylist = {
      id: uuidv4(),
      title: request.body.title,
	  date: timestamp,
      songs: []
    };
    playlistStore.addPlaylist(newPlaylist);
    response.redirect('/dashboard');
},
deletePlaylist(request, response) {
    const playlistId = request.params.id;
    logger.debug(`Deleting Playlist ${playlistId}`);
    playlistStore.removePlaylist(playlistId);
    response.redirect("/dashboard");
},

addSong(request, response) {
  const playlistId = request.params.id;

  const rating = parseInt(request.body.rating, 10);

  const newSong = {
    id: uuidv4(),
    title: request.body.title,
    artist: request.body.artist,
    rating: rating
  };

  playlistStore.addSong(playlistId, newSong);
  response.redirect('/dashboard');
}



};

export default dashboard;
