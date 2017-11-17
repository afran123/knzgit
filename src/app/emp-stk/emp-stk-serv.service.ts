import { Injectable } from '@angular/core';
import { StickerList } from './sticker_list_class';
import { StickerListData } from './sticker_list_data';

import { StkTablesDtl } from './sticker-dd-data';

@Injectable()
export class EmpStickerService {

  getEmpStickerList(): Promise<StickerList[]> {
    return Promise.resolve(StickerListData);
  }


  getstickerDDList(): Promise<any> {
    return Promise.resolve(StkTablesDtl);
  }




}