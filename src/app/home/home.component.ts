import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public list: any[] = [
    { title: '我是新聞1' },
    { title: '我是新聞2' },
    { title: '我是新聞3' },
  ];

  public flag: boolean = true;

  public switch() {
    this.flag = !this.flag;
  }

  public orderStatus: number = 5; // 1: 未付款 2: 已付款 3: 已發貨 4: 已完成 5: 取消 6: 訂單準備中

  public color: string = 'red';

  public color2: any[] = ['red', 'yellow', 'green', 'blue', 'pink', 'purple'];
  public color3: object = { color: 'grey', 'font-size': '20px' };

  public today: any = new Date();
  public run() {
    alert('成功');
  }

  public title: string = '我是一個title';

  public getData() {
    alert(this.title);
  }

  public setData() {
    this.title = '我是改變後的title';
  }

  public keyPressed: string = '';
  //鍵盤事件
  //event: KeyboardEvent，指定event的類型是KeyboardEvent
  keydown(event: KeyboardEvent) {
    if (event.key == 'Enter') {
      console.log('按了一下回車');
    }
    console.log(event.key);
    this.keyPressed = event.key;
  }
  //event: UIEvent，指定event的類型是UIEvent
  //拿來改變dom元素的樣式
  public runEvent(event: UIEvent): void {
    let dom: any = event.target;
    dom.style.backgroundColor = 'red';
    dom.style.color = 'white';
    dom.style.borderRadius = '1rem';
  }
  //改變dom元素的樣式：不接收參數寫法
  public runEvent2(): void {
    let btn = document.getElementById('btn');
    if (btn) {
      btn.style.backgroundColor = 'blue';
    }
  }

  public keywords: string = 'default';
  public changeValue() {
    this.keywords = '改變後的值';
  }

  public watchValue() {
    console.log(this.keywords);
  }
}
