//キーボードがクリックされたら、キーに応じた単音を鳴らす関数

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



//コード(和音)のボタンがクリックされたら、ボタンに応じてコードを鳴らす関数

//C
function chord_Cplay(){
  const chord_C = new Audio('./audio/accordion/accordion_chord_C.mp3');
  chord_C.play();
}

//C#
function chord_Cshaplay(){
  const chord_Csha = new Audio('./audio/accordion/accordion_chord_Csha.mp3');
  chord_Csha.play();
}

//D
function chord_Dplay(){
  const chord_D = new Audio('./audio/accordion/accordion_chord_D.mp3');
  chord_D.play();
}

//D#
function chord_Dshaplay(){
  const chord_Dsha = new Audio('./audio/accordion/accordion_chord_Dsha.mp3');
  chord_Dsha.play();
}

//E
function chord_Eplay(){
  const chord_E = new Audio('./audio/accordion/accordion_chord_E.mp3');
  chord_E.play();
}

//F
function chord_Fplay(){
  const chord_F = new Audio('./audio/accordion/accordion_chord_F.mp3');
  chord_F.play();
}

//F#
function chord_Fshaplay(){
  const chord_Fsha = new Audio('./audio/accordion/accordion_chord_Fsha.mp3');
  chord_Fsha.play();
}

//G
function chord_Gplay(){
  const chord_G = new Audio('./audio/accordion/accordion_chord_G.mp3');
  chord_G.play();
}

//G#
function chord_Gshaplay(){
  const chord_Gsha = new Audio('./audio/accordion/accordion_chord_Gsha.mp3');
  chord_Gsha.play();
}

//A
function chord_Aplay(){
  const chord_A = new Audio('./audio/accordion/accordion_chord_A.mp3');
  chord_A.play();
}

//A#
function chord_Ashaplay(){
  const chord_Asha = new Audio('./audio/accordion/accordion_chord_Asha.mp3');
  chord_Asha.play();
}

//B
function chord_Bplay(){
  const chord_B = new Audio('./audio/accordion/accordion_chord_B.mp3');
  chord_B.play();
}


/*
//上記をループ処理で実現したい↓
//ピアノ単音音源のファイル名リスト
const singleNotes = ["C4", "Csha4", "D4", "Dsha4", "E4", "F4", "Fsha4", "G4", "Gsha4", "A4", "Asha4", "B4", "C5"]; 
//ピアノ音源の共通パス
const pathPiano = "./adio/piano/piano_";
//拡張子
const mp3 = ".mp3"
//ピアノ単音音源のパスリスト
const soundsPiano = [];
singleNotes.forEach(note => {
  let soundPiano = new Audio(pathPiano + note + mp3);
  soundsPiano.push(soundPiano);
})

//ループで連想配列を作る(？)
const testMap = new Map();
const i = 1
singleNotes.forEach(sn => {
  testMap.set(sn,i);
  i += 1;
  }
);

//クリックした要素のidを取得
let keyboard = document.getElementsByClassName('keyboard');
keyboard.addEventlistener('click', (e) => {
    console.log(e.target.id)
  }
);

//onclickで引数を渡したいが渡せない。何故かundefinedになる

//音を鳴らす関数
function soundplay(sound){
  soundPiano.play();
} 
*/