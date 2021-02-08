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
  lengthOfGrid = 4;

  Lightswitch(columnInd: number,cellInd: number): void{
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
  }

  Won(): boolean{
   for(let i=0; i< this.grid.length; i++){
    for(let o=0; o< this.grid[i].length; o++){
    if(this.grid[i][o] == false)
    return false;
    }
    }
    return true;
    }

}
  // ngOnInit(): void {
  //    for (let i= 0; i < this.router.config.length; i++) {
  //      if(this.router.config[i].path != undefined){
  //        this.routes.push(this.router.config[i].path);
  //     }
  //    }
  //  }


