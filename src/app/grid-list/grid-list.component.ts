import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css'],
})
export class GridListComponent implements OnInit {
  tiles: Tile[] = [
    {
      text: 'One',
      cols: 1,
      rows: 2,
      color: 'lightblue',
      imageSrc:
        'https://images.pexels.com/photos/1697076/pexels-photo-1697076.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image URL
    },
    {
      text: 'Two',
      cols: 1,
      rows: 2,
      color: 'lightgreen',
      imageSrc:
        'https://images.pexels.com/photos/1082326/pexels-photo-1082326.jpeg?auto=compress&cs=tinysrgb&w=600', 

    },
    {
      text: 'Three',
      cols: 1,
      rows: 2,
      color: 'lightpink',
      imageSrc:
        'https://images.pexels.com/photos/2057610/pexels-photo-2057610.jpeg?auto=compress&cs=tinysrgb&w=600', 

    },
    {
      text: 'Four',
      cols: 1,
      rows: 2,
      color: '#DDBDF1',
      imageSrc:
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600', 

    },
  ];

  ngOnInit() {

  }
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  imageSrc: string;

}
