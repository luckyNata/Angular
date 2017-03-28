import {Component, OnInit, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { MainService } from '../shared/main.service'
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {DataType} from "../shared/dataType";

@Component({
    moduleId: module.id,
    selector: 'knowledge',
    templateUrl: 'knowledge.component.html',
    styleUrls: ['knowledge.component.css']
})

@Injectable()
export class KnowledgeComponent implements OnInit{
    knowledge: any = [];
    data1: DataType;


    constructor(private mainService: MainService, private router: Router){}

    ngOnInit(){
        this.mainService.getData().subscribe(mas => {
            this.data1 = mas;
            this.knowledge = this.data1.knowledge;
        })
    }
    goHome(){
        this.mainService.showThreeButtons();
        console.log(this.mainService.getFlag());
        this.router.navigate(['']);
    }
}