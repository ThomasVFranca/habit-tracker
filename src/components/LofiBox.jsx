import { useEffect } from 'react';
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

function App() {
  useEffect(() => {
    $( ".lofi-box" ).resizable();
    $( ".lofi-box" ).draggable();
  }, [])

  return (
    <div className="lofi-box" id="resizable">
      <h3>Lofi Beats</h3>
      <hr />
      <iframe 
      width="560" height="315" 
      src="https://www.youtube.com/embed/jfKfPfyJRdk"
      title="YouTube video player"
      frameborder="0" 
      allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen />
    </div>
  );
}

export default App;
