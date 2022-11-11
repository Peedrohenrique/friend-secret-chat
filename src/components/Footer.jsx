import "../App.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <audio
          src="https://s25.maxcast.com.br:8136/live?id=1668086756841"
          controls="controls"
          autoPlay="autoPlay"
          loop
          preload="none"
          title="Abaçaiado - O Teatro Mágico"
        >
          <source
            type="audio/ogg"
            src="https://casthttps.suaradionanet.net/13805/stream"
          />
          <source
            type="audio/mpeg"
            src="https://casthttps.suaradionanet.net/13805/stream"
          />
          <a href="https://casthttps.suaradionanet.net/13805/stream">
            Abaçaiado - O Teatro Mágico.mp3
          </a>
        </audio>
      </footer>
    </>
  );
}

export default Footer;
