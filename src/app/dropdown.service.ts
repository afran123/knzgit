import { Injectable } from '@angular/core';
import { DropDown } from './dropdown-class';
import { DROPDOWNDATA } from './dropdown-data';
@Injectable()
export class DropDownService {
  getDropDownData(): Promise<DropDown[]> {
    return Promise.resolve(DROPDOWNDATA);
  }
}