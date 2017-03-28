import {Component, OnInit} from '@angular/core';
import {OnInit} from '@angular/core';
import {MainService} from '../shared/main.service';
import {DataType} from "../shared/dataType";

@Component({
    moduleId: module.id,
    selector: 'wrapper',
    templateUrl: 'wrapper.component.html',
    styleUrls: ['wrapper.component.css']
})

export class WrapperComponent implements OnInit{
    data1: DataType;
    flag: Boolean;
    color: any;
    hideFlag: Boolean;

    constructor(private mainService: MainService){}
    ngOnInit(){
        this.changeColor();
        setInterval(() => {
            this.changeColor();
        }, 3000);


        this.mainService.getData()
            .subscribe(mas => {
                this.data1 = mas;
                this.flag = this.data1.flag;
                console.log('data1', mas)
            });

        this.hideFlag = this.mainService.getFlag();
        console.log('onInit', this.hideFlag);
    }

    changeColor(){
        this.color = this.mainService.changeColor();
    }

}