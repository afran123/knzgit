import { Injectable } from '@angular/core';
import { Emptab } from './table-class';
import { TABLEDATA } from './table-data';
@Injectable()
export class TableService {
  getEmpData(): Promise<Emptab[]> {
    return Promise.resolve(TABLEDATA);
  }
}