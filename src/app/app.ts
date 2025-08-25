import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  items = Array.from({ length: 500 }, (_, i) => ({
    id: i,
    value: `Item ${i}`,
  }));

  getHeavyCalculation(value: string) {
    // このログが何回表示されるかに注目！
    console.log(`Calculating for ${value}...`);

    // わざと重くした計算処理
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += Math.sqrt(i);
    }
    return `${value} processed`;
  }

  // マウスを動かすたびに変更検知をトリガーするためのイベント
  onMouseMove() {
    // このメソッドの中身は空でOK
  }
}
