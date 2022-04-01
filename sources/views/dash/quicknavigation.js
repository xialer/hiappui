import {JetView} from "webix-jet";

//查询按钮
function openSearch() {
	this.config.icon = (this.config.icon == "wxi-close") ? "mdi mdi-magnify" : "wxi-close";
	const input = this.$scope.$$("srch:field");
	input.isVisible() ? input.hide() : input.show();
	const header = this.$scope.$$("header");
	header.isVisible() ? header.hide() : header.show();
	this.refresh();
}

// 主要视图
export default class QuickNavigation extends JetView {
	config() {
		return {
			width: 387,
			rows: [
				{
					type: "toolbar", height: 48, padding: {right: 8},
					cols: [
						// 标题
						{template: "使用情况统计", type: "header", borderless: true, localId: "header"},
						// 使用控件(平时隐藏)
						{
							view: "text", localId: "srch:field", placeholder: "Type to search", hidden: true,
							on: {
								onViewShow() {
									const self = this;
									webix.delay(function () {
										self.focus();
									});
								},
								onTimedKeyPress() {
									const input = this.getValue().toLowerCase();
									this.$scope.$$("currencies").filter(obj => obj.name.indexOf(input) !== -1);
								}
							}
						},
						// 查询图标
						{view: "icon", icon: "mdi mdi-magnify", click: openSearch}
					]
				},
				{
					view: "list", localId: "currencies",
					css: "currencies_list",
					select: true,
					yCount: 4,
					type: {
						height: 64,
						template: obj => {
							// const delta = parseFloat(obj.delta) > 0 ? "green" : "red";
							return `
								<span class='value'>${obj.name}</span>
								`;
						}
					},
					on: {
						onItemClick: (id) => {
							this.app.callEvent("currency:select", [id]);
						}
					}
				},


			]
		};
	}

	init() {
		this.$$("currencies").parse([
			{name: "综合统计", icon: "€", value: 321.12, delta: "-0.2", color: "#1CA1C1"},
			{name: "API使用情况", icon: "$", value: 345.76, delta: "+0.2", color: "#55CD97"},
			{name: "文件数据量", icon: "¥", value: 567.26, delta: "+0.3", color: "#FDBF4C"},
			{name: "提交情况", icon: "£", value: 234.64, delta: "-0.1", color: "#FF5C4C"}
		]);
		this.$$("currencies").select(this.$$("currencies").getFirstId());
	}
}