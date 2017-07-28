import { Gift } from "../models/Gift";
import { Injectable } from '@angular/core';

@Injectable()
export class GiftService{
    private myGifts: Array<Gift>

    constructor(){
        this.myGifts = new Array();
        var aGift = new Gift();
        aGift.age = 24;
        aGift.name = 'Mathias';
        aGift.gendar = 'Mand'
        aGift.sport = new Array<string>();
        aGift.sport.push("Kajak");
        aGift.sport.push("cykling")
        this.myGifts.push(aGift);
        
    }

    public add(gift:Gift){
        this.myGifts.push(gift);
    }

    public numberOfGifts():number{
        return this.myGifts.length;
    }

    public list(){
        return this.myGifts;
    }
}