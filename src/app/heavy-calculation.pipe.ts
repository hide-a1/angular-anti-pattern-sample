import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heavyCalculation',
  pure: true, // これがデフォルトですが、純粋であることを明示
})
export class HeavyCalculationPipe implements PipeTransform {
  transform(value: string): string {
    // ロジックはメソッドの時と全く同じ
    console.log(`Pipe transforming ${value}...`);

    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += Math.sqrt(i);
    }
    return `${value} processed`;
  }
}
