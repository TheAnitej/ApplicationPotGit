import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { StatusComponent } from '../status/status.component';


@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css'],

})


export class CompOneComponent implements OnInit {

  allKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", "\\", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", " "];
  nonAlphas = ["-", "=", "{", "}", "\\", ";", "'", "<", ",", ".", "?", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  fingers : number[] =[];
  closedbracket = '}';
  openbracket = '{';
  forwardSlash = '\\'

  fingerOne=["Q","A","Z","1","q","a","z"];
  fingerTwo=["W","S","X"];
  fingerThree=["E","D","C"];
  fingerFour=["R","F","V","T","G","B"];
  fingerFive=[" "];
  fingerSix=[""];
  fingerSeven=["Y","H","N","U","J","M"];
  fingerEight=["I","K",","];
  fingerNine=["O","L","."];
  fingerTen=["P",";","?"]

  constructor(public dialog: MatDialog
  ) { }


  openDialog(): void {
    const    dialogRef = this.dialog.open(StatusComponent);

    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.refresh();
    });
  };

  onclose(){
    
  }


  

  value = '';
  randomStrings: any;
  values = [
    'Programming started and developed in 1883 when Ada Lovelace and Charles Babbage collaborated on the Analytical Engine, a primitive mechanical computer.',
    'In the 1950s, International Business Machines (IBM)’s John Backus and his colleagues devised the first coding language, Fortran (FORmula TRANslation).',
    'After the introduction of programming, technology took quick steps towards advancement, with the creation of computer games and the predecessor of the internet, the Advanced Research Projects Agency Network (ARPANET).',
    'According to the PYPL Popularity of Programming Language Index, which evaluates how frequently language lessons are searched on Google, Python is the most widely used programming language.',
    'The name Oak was intended to be used for the popular Java that we commonly use now, but it was already used and copyrighted.',
    'James Gosling, Mike Sheridan, and Patrick Naughton started working on the Java language project in June 1991, which was originally planned for interactive television.',
    'Alan Turing, an English computer scientist, employed his cryptologic and mathematical talents to took a critical role by decrypting the Nazi code machine ENIGMA during World War II.',
    'NASAs reusable space shuttle in the 1970s had less code than our phones today.',
    'Contrary to how it sounds like, Python was named after Monty Python, not after the snake.',
    'In 2018, the video game business generated about $135 billion in revenue.',
  ]

  ngOnInit(): void {
    this.refresh();

  }

  randomString() {
    let index = Math.floor(Math.random() * 10);
    return this.values[index];
  }

  refresh() {
    this.timeLeft = 0
    this.value = '';
    this.randomStrings = this.randomString();
  }

  valueChanged(event: any) {
    if (this.value.length === 1 && this.timeLeft === 0) {
      this.startTimer();
    }
    if (this.randomStrings)
      if (this.value === this.randomStrings) {
        this.openDialog();
      }
  }

  checkValidity(i: number) {
    if (i >= this.value.length) {
      return 'pending';
    }
    return this.value[i] === this.randomStrings[i] ? 'correct' : 'incorrect';
  }

  timeLeft: number = 0;
  interval: any;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.value.length !== this.randomStrings.length && this.value.length > 0) {
        this.timeLeft++;
      } else if (this.timeLeft > 0) {
        this.timeLeft++;
      }

    }, 1000)
  }

  selectFinger(key: number){

    if(!this.nonAlphas.includes(this.allKeys[key])){
      if(this.fingerOne.includes(this.randomStrings[this.value.length].toUpperCase())){
        this.fingers.push(1);
      }else{
          let index = this.fingers.indexOf(1);
      if(index!==-1){
        this.fingers.splice(index,1);
      }
      }
    }

    
  }

  keyToClick(key: number) {

    if(this.nonAlphas.includes(this.randomStrings[this.value.length])){
      console.log('nonAlphs',key,this.randomStrings[this.value.length])
    }

    if(
      this.fingerOne.includes(this.randomStrings[this.value.length].toUpperCase())){
      this.fingers.push(1)
    }else{
    //   let index = this.fingers.indexOf(1);
    // if(index!==-1){
    //   this.fingers.splice(index,1);
    // }
    }

    if (this.isDelete() !== 'key clay type' && this.randomStrings[this.value.length]!==undefined ) {
      if (key === 46) {
        if (this.randomStrings[this.value.length] === ' ') {
          return 'key clay type';
        }
      }
      if (!this.nonAlphas.includes(this.randomStrings[this.value.length])) {
        if (this.allKeys[key] === this.randomStrings[this.value.length].toLowerCase()) {
          return 'key clay' + ' type'
        }
      }else{
        if (this.allKeys[key] === this.randomStrings[this.value.length]) {
          return 'key clay' + ' type'
        }
      }
    }

    return 'key clay';
  }


  isUppercase() {
    if(this.isDelete()==='key clay'){
      return this.randomStrings[this.value.length].toUpperCase() === this.randomStrings[this.value.length]
      && !this.nonAlphas.includes(this.randomStrings[this.value.length])
      ? this.addCaps()  : this.removecaps()
    }
    return 'key clay';
  }

  addCaps(){
    this.fingers.push(1)
    return 'key clay type';
  }

  removecaps(){
    let index = this.fingers.indexOf(1);
    if(index!==-1){
      this.fingers.splice(index,1);
    }
        return 'key clay';
  }

  isDelete() {
    if (this.value.length > 0) {
      return this.value !== this.randomStrings.substring(0, this.value.length) ? 'key clay type' : 'key clay'
    }
    return 'key clay';
  }

}
