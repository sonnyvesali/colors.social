import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoProfilePageService {
  constructor() {}

  imagePath!: any;
  pics_arr!: string[];

  changeTheImg(arr: string[], id: string) {
    this.imagePath = arr[Number(id)];
  }

  defaultImg(arr: string[]) {
    this.imagePath = arr[0];
  }
}
