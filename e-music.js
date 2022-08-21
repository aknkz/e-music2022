//C4
function pianoC4play(){
  const pianoC4 = new Audio('./audio/piano/piano_C4.mp3');
  pianoC4.play();
}

//C#4
function pianoCsha4play(){
  const pianoCsha4 = new Audio('./audio/piano/piano_Csha4.mp3');
  pianoCsha4.play();
}

//D4
function pianoD4play(){
  const pianoD4 = new Audio('./audio/piano/piano_D4.mp3');
  pianoD4.play();
}

//D#4
function pianoDsha4play(){
  const pianoDsha4 = new Audio('./audio/piano/piano_Dsha4.mp3');
  pianoDsha4.play();
}

//E4
function pianoE4play(){
  const pianoE4 = new Audio('./audio/piano/piano_E4.mp3');
  pianoE4.play();
}

//F4
function pianoF4play(){
  const pianoF4 = new Audio('./audio/piano/piano_F4.mp3');
  pianoF4.play();
}

//F#4
function pianoFsha4play(){
  const pianoFsha4 = new Audio('./audio/piano/piano_Fsha4.mp3');
  pianoFsha4.play();
}

//G4
function pianoG4play(){
  const pianoG4 = new Audio('./audio/piano/piano_G4.mp3');
  pianoG4.play();
}

//G#4
function pianoGsha4play(){
  const pianoGsha4 = new Audio('./audio/piano/piano_Gsha4.mp3');
  pianoGsha4.play();
}

//A4
function pianoA4play(){
  const pianoA4 = new Audio('./audio/piano/piano_A4.mp3');
  pianoA4.play();
}

//A#4
function pianoAsha4play(){
  const pianoAsha4 = new Audio('./audio/piano/piano_Asha4.mp3');
  pianoAsha4.play();
}

//B4
function pianoB4play(){
  const pianoB4 = new Audio('./audio/piano/piano_B4.mp3');
  pianoB4.play();
}

//C5
function pianoC5play(){
  const pianoC5 = new Audio('./audio/piano/piano_C5.mp3');
  pianoC5.play();
}


//黒鍵で以下エラーが出る　ライブラリを使わないと解決しない？？
//Uncaught (in promise) DOMException: Failed to load because no supported source was found.



// const sounds = ["C4.mp3", "C#4.mp3", "D4.mp3"];  //音源のファイル名リスト
// const pathPiano = "./audio/piano/";  //ピアノ音源のパス
// const soundsPiano = [];

// sounds.forEach(sound => {
//   let soundPiano = new Audio(pathPiano + sound);
//   soundsPiano.push(soundPiano);
// })