import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable()
export class Transaction {
    receiver: User;
    sender: User;
    amount: number;
    time: Date;
    gasPrice: number;
    gasUsed: number;
    blockHash: number;
}
