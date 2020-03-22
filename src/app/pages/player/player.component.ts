import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  sound =  new Howl( {
    src: ['sound.webm', 'sound.mp3']
  });

  constructor() { }

  ngOnInit() {
    //play the sound
    this.sound.play();

    //change global volume
    Howler.volume(0.5);
  }
}
