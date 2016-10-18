const episodes = [
  { id: 's06e01', title: 'The Red Woman' },
  { id: 's06e02', title: 'Home' },
  { id: 's06e03', title: 'Oathbreaker' },
  { id: 's06e04', title: 'Book of the Stranger' },
  { id: 's06e05', title: 'The Door' },
  { id: 's06e06', title: 'Blood of My Blood' },
  { id: 's06e07', title: 'The Broken Man' },
  { id: 's06e08', title: 'No One' },
  { id: 's06e09', title: 'Battle of the Bastards' },
];

const finaleEpisode = { id: 's06e10', title: 'The Winds of Winter' };

function getNextEpisodeInPlaylist(playlist){
  return playlist[0]
}

function removeFromPlaylist(playlist, episode){
  return Object.assign(playlist).filter(function(thing){
    return thing!= episode
  })
}
function addToPlaylist(playlist, episode){
  var thingie = JSON.parse(JSON.stringify(playlist))
  thingie.push(episode)
  return thingie
}

function bingeWatch(playlist){
  // for (var i=playlist.length; i > 0; i--){
  //  bingeWatch(removeFromPlaylist(playlist, playlist[i]))
  //  console.log(playlist.length)
  // }
  // while (playlist.length>0){
  //   playlist = removeFromPlaylist(playlist, playlist[0])
  //   console.log(playlist.length)
  // }
  if (playlist.length > 0) {

    bingeWatch(removeFromPlaylist(playlist, playlist[0]))
    console.log(playlist.length)

  }
    return 'Please let there be more!'
}

bingeWatch(episodes)
