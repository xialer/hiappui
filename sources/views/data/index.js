import {JetView} from "webix-jet";
import {getSheetData} from "models/sheet";


export default class DataView extends JetView {
	config(){


		return {
			rows:[
				{
					view:"datatable",
					columns:[
						{ id:"name",	header:"", css:"rank"},
						{ id:"year",	header:"Released"},
					],
					autoheight:true,
					scroll: "auto",
					data:[
						{ id:1,name:"The Shawshank Redemption",year:1111},
						{ id:2,name:"The Godfather",year:2222}
					]
				},
				{template:"row 2"},
				{
					cols:[
						{template:"col 1"},
						{template:"col 2"}
					]
				}
			]
		};
	}
	init(){
	}
}
