import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfilePageService {
  constructor() {}

  imagePath!: any;
  pics_arr!: string[];

  changeTheImg(arr: string[], id: string) {
    console.log(arr);
    this.imagePath = arr[Number(id)];
  }

  defaultImg(arr: string[]) {
    console.log(arr);
    this.imagePath = arr[0];
  }
}
