import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfilePageService {
  constructor() {}

  imagePath!: any;
  pics_arr!: string[];
  projectNiches!: string[];
  projectRoles!: string[];
  projectName!: string;

  changeTheImg(arr: string[], id: string) {
    this.imagePath = arr[Number(id)];
  }

  defaultImg(arr: string[]) {
    this.imagePath = arr[0];
  }
}
