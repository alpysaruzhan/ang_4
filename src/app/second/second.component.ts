import { Component, OnInit } from '@angular/core';

interface skill {
  id: number;
  name: string;
  template: string;
}


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  skills: skill[] = [
    {
      id:1,
      name: 'опыт работы с HTML5, CSS3, JS;',
      template: 'bold'
    },
    {
      id: 2, 
      name: 'знание JavaScript/JQuery;',
      template: 'bold'
    },
    {
      id: 3,
      name: 'опыт адаптивной верстки;',
      template: 'bold'
    },
    {
      id:4,
      name: 'опыт создания HTML-страницы сайта на основе дизайн-макетов;',
      template: 'bold'
    },
    {
      id: 5,
      name: 'знание фреймворков',
      template: 'italic'
    }
  ];
  expression = true;
  constructor() { }

  ngOnInit(): void {
  }

}
