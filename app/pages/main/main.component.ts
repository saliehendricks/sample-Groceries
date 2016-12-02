import { Component, ElementRef, ViewChild, Injectable, OnInit, ChangeDetectorRef } from "@angular/core";
import { View } from "ui/core/view";
//import { RadSideDrawer } from "nativescript-telerik-ui/sidedrawer";
import { Page } from "ui/page";
//import { ActionItem } from "ui/action-bar";
import sideDrawerModule = require('nativescript-telerik-ui/sidedrawer');
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
//import { DataItemService } from "../../listview/dataItem.service";
import { ObservableArray } from "data/observable-array";
//import { DataItem } from "../../listview/dataItem";

@Component({
    //moduleId: module.id,
    selector: "tk-sidedrawer-getting-started",
    //providers: [DataItemService],
    templateUrl: 'pages/main/main.html',
    styleUrls: ['pages/main/main-common.css','pages/main/main.css']
})
@Injectable()
export class MainComponent extends Observable implements OnInit {
    //private _dataItems: ObservableArray<DataItem>;
    //, private _dataItemService: DataItemService
    constructor(private page: Page, private _changeDetectionRef: ChangeDetectorRef ) {
        super();
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    // get dataItems(): ObservableArray<DataItem> {
    //     return this._dataItems;
    // }

    ngOnInit() {
        this.set("mainContentText", "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
            + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.");
        //this._dataItems = new ObservableArray(this._dataItemService.getDataItems());

    }

    public openDrawer() {
        this.drawer.showDrawer();
    }
}