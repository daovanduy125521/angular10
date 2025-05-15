import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular10';
  ngOnInit(): void {
    const a = [2, 6];
    const b = [24, 36];
    this.getTotalX(a, b);
  }

  getTotalX(a: number[], b: number[]) {
    let UCLN = b.reduce((number, xxx) => this.getUCLN(number, xxx));
    let BCNN = a.reduce((number, xxx) => this.getBCNN(number, xxx));
    let count = 0;
    console.log(UCLN);
    console.log(BCNN);
    
    
    for (let i = BCNN; i <= UCLN; i = i + BCNN) {
      count = UCLN % i === 0 ? count + 1 : count;
    }


    console.log(count);

  }

  getUCLN(x, y) {
    while (y > 0) {
      const temp = y;
      y = x % y;
      x = temp
    }
    return x;
  }

  getBCNN(x, y) {
    return x * y / this.getUCLN(x, y);
  }
}
