import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

export class SortUtils {
  static sortArrayBy(array: any[], args: string[]) {

  }
}

@Component({
  selector: 'app-combat-turns-calculator',
  templateUrl: './combat-turns-calculator.component.html',
  styleUrls: ['./combat-turns-calculator.component.scss']
})
export class CombatTurnsCalculatorComponent implements OnInit {

  players = [];
  player = new Player('Monster 1', 3, false);
  submitted = false;

  constructor() { }

  ngOnInit() {
    /*this.players.push(new Player('Monster A', 3, false));
    this.players.push(new Player('Monster B', 1, false));
    this.players.push(new Player('Monster C', 5, false));
    this.players.push(new Player('Monster D', 10, false));*/
  }

  onSubmit() {
    this.submitted = true;
    this.players.push(this.player);
    this.players.sort((a, b) => a.initiativeMod < b.initiativeMod ? 1 : 0);
    this.player = new Player('', 0, false);
  }

  removePlayer(index) {
    this.players.splice(index, 1);
    this.players.sort((a, b) => a.initiativeMod < b.initiativeMod ? 1 : 0);
  }

  rollDice20() {
    this.player.roll = Math.floor(Math.random() * 20) + 1;
    console.log(this.player.roll);
  }

  get diagnostic() {
    return JSON.stringify(this.player);
  }

}
