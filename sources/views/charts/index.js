import {JetView} from "webix-jet";

export default class ChartsView extends JetView {
	config() {
		return {
			view: "scrollview", body: {

				rows: [
					{
						cols: [
							{$subview: "charts.time"},
							{$subview: "charts.progress"}
						]
					},
					{
						$subview: "charts.statistics"
					},
					{
						cols: [
							{$subview: "charts.geo"},
							{$subview: "charts.compare"}
						]
					}
				]
			}
		};
	}
}