import { Injectable } from '@angular/core';

@Injectable()
export class User {
    address: string = '0x000000000000000000000000000000';
    name: string = 'Default';
    balance: number = 0;
}
