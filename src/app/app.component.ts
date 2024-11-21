import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HenryComponent } from './henry/henry.component';
//導入提供ngIf/ngFor等等指令
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@Component({
  //表示這個組件可以在其他模板中通過 <app-root></app-root> 標籤來使用，這裏在Index.html中。
  selector: 'app-root',
  standalone: true,
  //導入 RouterOutlet 指令
  //可以在 AppComponent 的模板中使用 RouterOutlet 指令
  imports: [RouterOutlet, CommonModule, HenryComponent, HomeComponent],
  //模板文件的路徑
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hero';
  heroTitle = 'Henry';
  //typeScript的寫法，():number，指定返回類型是number
  getVal(): number {
    return 123;
  }
  //getter 方法，這意味著它是一個屬性訪問器，用於獲取屬性的值。
  //訪問時非函數調用，而是單純屬性訪問
  get job(): string {
    return 'Software Engineer';
  }

  price = 100;

  gender = 0;

  user = 'Henry';
  logoUrl = 'assets/images/smart.png';

  //包成物件
  userObj = {
    name: 'Rick',
    url: 'assets/images/ok.png',
  };

  userObj2 = {
    name: this.user,
    url: this.logoUrl,
  };

  //多個class綁定方法
  btnCls = 'font-bold';
  btnCls2 = ['ml-20', 'font-bold'];
  btnCls3 = {
    'px-20': true,
    'bg-slate-200': true,
    'font-light': true,
  };

  public arr: any[] = ['12', '23', '34', '45'];

  //運算列表中的數字
  public arr2: Array<number> = [123, 234, 345, 567];
  //reduce() 方法將一個累加器函數應用於每一個元素，將其減少為單一值。
  getSum(): number {
    return this.arr2.reduce((prev, curr) => prev + curr, 0);
  }
  //物件陣列
  public userList: any[] = [
    { userName: 'Henry', age: 18 },
    { userName: 'Rick', age: 20 },
    { userName: 'Morty', age: 22 },
  ];

  //物件陣列嵌套
  public carList: any[] = [
    {
      car: 'benz',
      year: 2018,
      type: [{ title: 'c300', price: '130萬' }],
    },
    {
      car: 'BMW',
      year: 2010,
      type: [{ title: 'x5', price: '160萬' }],
    },
    {
      car: 'toyota',
      year: 2022,
      type: [{ title: 'camry', price: '80萬' }],
    },
  ];
}
