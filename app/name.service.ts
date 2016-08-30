import { Injectable } 	from '@angular/core';
import { NAMES }		from './name.const'

@Injectable()
export class NameService {
	getNameByAddress(address:string):string{
		return NAMES[address];
	}  
}
