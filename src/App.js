import './App.css';
import $ from 'jquery';
/**
 * @function DrumPad Displays a clickable drumpad with audio on click
 * 
 * @param {String} props.sound Onomatopoeia string for drum pad sound
 * @param {String} props.audio ID of drumpad container div element
 * @param {String} props.name ID of audio element
 */
function DrumPad(props) {
  /**
 * @function handleClick On click plays audio of clicked drumpad
 */
  function handleClick() {
    document.getElementById("display").innerHTML = props.sound;
    let audio = document.getElementById(props.name);
    audio.play();
  }
  return (
    <div id={props.audio} onClick={handleClick} className="drum-pad">
      {props.name}
      <audio className="clip" id={props.name} src={props.audio}>
      </audio>
    </div>
  );
}
/**
 * @function DrumPad Displays 9 clickable drumpads and a display text for their sound
 */
function Drums() {
  /**
 * @function window.onload On window load, use jquery to set keypress events
 * for each drumpad
 */
  window.onload = function() {
    $(document).keypress(function(e){
      if (e.which === 81){
          $("#Q").click();
      }
    });
    $(document).keypress(function(e){
      if (e.which === 87){
          $("#W").click();
      }
    });
    $(document).keypress(function(e){
      if (e.which === 69){
          $("#E").click();
      }
    });
    $(document).keypress(function(e){
      if (e.which === 65){
          $("#A").click();
      }
    });
    $(document).keypress(function(e){
      if (e.which === 83){
          $("#S").click();
      }
    });
    $(document).keypress(function(e){
      if (e.which === 68){
          $("#D").click();
      }
    });
    $(document).keypress(function(e){
      if (e.which === 90){
          $("#Z").click();
      }
    });
    $(document).keypress(function(e){
      if (e.which === 88){
          $("#X").click();
      }
    });
    $(document).keypress(function(e){
      if (e.which === 67){
          $("#C").click();
      }
    });
  }
  return (
    <div id="drum-machine">
      <span id="display">*Ba-dum*</span>
      <div className="pad-container">
        <DrumPad sound={"*Ba-dum*"} name={"Q"} audio={"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"} />
        <DrumPad sound={"*Ba-dum-tss*"} name={"W"} audio={"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"} />
        <DrumPad sound={"*Bu-dumm*"} name={"E"} audio={"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"} />
        <DrumPad sound={"*Ba-ba*"} name={"A"} audio={"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"} />
        <DrumPad sound={"*Bu-da-ba*"} name={"S"} audio={"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"} />
        <DrumPad sound={"*Ba-da*"} name={"D"} audio={"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"} />
        <DrumPad sound={"*Clap-tss*"} name={"Z"} audio={"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"} />
        <DrumPad sound={"*Clap-clap*"} name={"X"} audio={"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"} />
        <DrumPad sound={"*Dumm*"} name={"C"} audio={"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"} />
      </div>
    </div>
  );
}
/**
 * @function App Creates app
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Drums />

      </header>
    </div>
  );
}

export default App;
