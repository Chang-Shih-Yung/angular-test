import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
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
}
