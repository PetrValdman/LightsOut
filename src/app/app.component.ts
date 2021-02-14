import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LightsOut';
  grid = [
           [false, true, false],
           [false, true, false],
           [false, true, false]
  ];
  turnstaken = 0;
  leastTurnsTaken = 0;
  lengthOfGrid = 4;

  lightswitch(columnInd: number,cellInd: number): void{
console.log(columnInd, cellInd);
if(columnInd -1 > -1)
this.grid[columnInd -1][cellInd]=!this.grid[columnInd- 1][cellInd];
if(cellInd -1 > -1)
this.grid[columnInd][cellInd - 1]=!this.grid[columnInd][cellInd - 1];
if(cellInd +1 < 3)
this.grid[columnInd][cellInd + 1]=!this.grid[columnInd][cellInd + 1];
if(columnInd +1 < 3)
this.grid[columnInd + 1][cellInd]=!this.grid[columnInd + 1][cellInd];
this.grid[columnInd][cellInd]=!this.grid[columnInd][cellInd];
this.turncounter();
console.log(this.turnstaken);
this.won();

  }
  randomGrid(): void{
  this.turnstaken = 0;
   for(let i=0; i< this.grid.length; i++){
      for(let o=0; o< this.grid[i].length; o++){
        let c = Math.random();
        if(c < 0.5)
        this.grid[i][o] = false;
        else
        this.grid[i][o] = true;
    }
    }
    }
  turncounter(){
  this.turnstaken++;
}
  bestScore(){
  if(this.turnstaken < this.leastTurnsTaken || this.leastTurnsTaken == 0)
  this.leastTurnsTaken = this.turnstaken;
  }
  won(): boolean{
   for(let i=0; i< this.grid.length; i++){
    for(let o=0; o< this.grid[i].length; o++){
    if(this.grid[i][o] == false){
    return false;
    break;
    }
    }
    }
    console.log("won");
    this.bestScore();
    this.randomGrid();
    return true;
    }
ngOnInit(): void {
this.randomGrid();
     }
}
  // ngOnInit(): void {
  //    for (let i= 0; i < this.router.config.length; i++) {
  //      if(this.router.config[i].path != undefined){
  //        this.routes.push(this.router.config[i].path);
  //     }
  //    }
  //  }


