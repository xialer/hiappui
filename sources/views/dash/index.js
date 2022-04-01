import {JetView} from "webix-jet";

export default class TopView extends JetView{
	config(){
		return {
			rows:[
				{

					cols:[
						{ $subview:"dash.quicknavigation" },
						{ $subview:"dash.progress" } ]
				},
				{  cols:[
					{ $subview:"dash.reviews" },
					{ rows:[
						{ $subview:"dash.stats" },
						{ $subview:"dash.projects" }
					]}
				]}
			]
		};
	}
}