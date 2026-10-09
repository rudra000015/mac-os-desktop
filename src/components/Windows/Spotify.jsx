import MacWindows from './MacWindows'
import "./spotify.scss"
function Spotify({ onClose }) {
  return (
  <MacWindows width='25vw' onClose={onClose}>
    <div className="spotify-window">
        <iframe data-testid="embeded-iframe" src="https://open.spotify.com/album/2Lxoc72vRTGdQfMvj7Ovi1?si=mQFzrUBhRAOM3v21CPBPIw" frameborder="0"></iframe>
    </div>
  </MacWindows>
  )
}

export default Spotify
