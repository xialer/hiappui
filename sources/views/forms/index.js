import {JetView} from "webix-jet";

export default class FormsView extends JetView {
	config() {
		webix.protoUI({
			name: "ace-editor", defaults: {
				mode: "javascript", theme: "monokai"
			}, $init: function (config) {
				this.$view.innerHTML = "<div style='width:100%;height:100%'></div>";
				this._waitEditor = webix.promise.defer();
				this.$ready.push(this._render_cm_editor);
			}, $setSize: function (w, h) {
				if (webix.ui.view.prototype.$setSize.call(this, w, h)) {
					if (this._editor) {
						this._editor.resize();
					}
				}
			}, _render_cm_editor: function () {
				if (this.config.cdn === false) {
					this._render_when_ready();
					return;
				}
				;

				this._cdn = this.config.cdn || "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.6";

				webix.require([this._cdn + "/ace.js"]).then(webix.bind(this._render_when_ready, this)).catch(function (e) {
					console.log(e);
				});
			}, _render_when_ready: function () {

				if (this._cdn) {
					ace.config.set("basePath", this._cdn);
					ace.config.set("modePath", this._cdn);
					ace.config.set("workerPath", this._cdn);
					ace.config.set("themePath", this._cdn);
				}
				;

				this._editor = ace.edit(this.$view.firstChild);


				this._editor.$blockScrolling = Infinity;
				this._editor.setOptions({
					fontFamily: "consolas,monospace", fontSize: "12pt"
				});

				if (this.config.theme) this._editor.setTheme("ace/theme/" + this.config.theme);
				if (this.config.mode) this._editor.getSession().setMode("ace/mode/" + this.config.mode);
				if (this.config.value) this.setValue(this.config.value);
				if (this._focus_await) this.focus();

				this._editor.navigateFileStart();
				this._waitEditor.resolve(this._editor);
			}, setValue: function (value) {
				if (!value && value !== 0) value = "";

				this.config.value = value;
				if (this._editor) {
					this._editor.setValue(value);
				}
			}, getValue: function () {
				return this._editor ? this._editor.getValue() : this.config.value;
			}, focus: function () {
				this._focus_await = true;
				if (this._editor) this._editor.focus();
			}, getEditor: function (waitEditor) {
				return waitEditor ? this._waitEditor : this._editor;
			}
		}, webix.ui.view);


		var colors = [{id: 1, value: "red"}, {id: 2, value: "blue"}, {id: 3, value: "green"}, {
			id: 4, value: "orange"
		}, {id: 5, value: "grey"}, {id: 6, value: "yellow"}];

		let data_with_icon = [{
			id: "root", value: "海宝金服", image: "home", open: true, data: [{
				id: "1", open: true, value: "海宝金服管理平台", data: [

					{
						id: "1.1",
						open: true,
						value: "服务",
						data: [{id: "1.1.1", image: "puzzle", value: "后端服务.puzzle"}, {
							id: "1.1.2", image: "puzzle", value: "后端服务.js"
						},]
					}, {
						id: "1.2",
						open: true,
						value: "界面",
						data: [{id: "1.2.1", image: "puzzle", value: "前端界面.frontend.js"}]
					}, {id: "1.3", image: "puzzle", value: "项目配置"}]
			}]
		}];


		return {
			rows: [{
				view: "toolbar", cols: [{
					view: "richselect",
					maxWidth: 300,
					label: "项目选择",
					labelAlign: "right",
					value: 1,
					options: [{id: 1, value: "海宝金服"}, {id: 2, value: "测试前端"}, {id: 3, value: "移动客户端服务"}]
				}

				]
			}, {
				cols: [{
					view: "tree", type: "lineTree", select: true, template: function (obj, com) {
						var icon = obj.$count ? com.folder(obj, com) : ("<img src='//docs.webix.com/samples/17_datatree/03_styles/icons/" + obj.image + ".png' style='float:left; margin:3px 4px 0px 1px;'>");
						return com.icon(obj, com) + icon + obj.value;
					}, data: webix.copy(data_with_icon), width: 300, minWidth: 50, maxWidth: 380
				}, {
					view: "resizer", id: "resizer"
				}, {
					rows: [{
						view: "tabbar", type: "bottom", multiview: true, options: [{
							value: "<span class='webix_icon fas fa-film'></span><span style='padding-left: 4px'>后端服务.js</span>",
							id: "listView"
						}, {
							value: "<span class='webix_icon fas fa-comments'></span><span style='padding-left: 4px'>后端服务.puzzle</span>",
							id: "formView"
						}, {
							value: "<span class='webix_icon fas fa-info'></span><span style='padding-left: 1px'>前端界面.frontend.js</span>",
							id: "aboutView"
						}], height: 50
					}, {
						id: "editor", view: "ace-editor", value: `'use strict';

class /*SERVICE_NAME*/shoppingCart/*SERVICE_NAME*/ {
/*TYPES*/
/*TYPES*/
/*METHODS*/
/*METHOD purchase*//*METHOD_COMPLEX_TYPES*//**//*METHOD_COMPLEX_TYPES*/

/**
* @route POST /purchase
* @param {String} cartName 
*/
async purchase(cartName) {
/*METHOD_BODY*/
var item, shoppingCart;


  shoppingCart = (await Xtsmart.Cache.get(cartName));
  if (shoppingCart != null) {
    for (var item_index in shoppingCart) {
      item = shoppingCart[item_index];
      await Xtsmart.Data.of('Order').save( item );
      await Xtsmart.Cache.remove(cartName);
    }
  }

/*METHOD_BODY*/
}
/*METHODS*/
}

Xtsmart.ServerCode.addService(/*SERVICE_NAME*/shoppingCart/*SERVICE_NAME*/);`
					}, {
						view: "toolbar", cols: [{
							view: "button", id: "LoadBut", value: "Load", width: 100, align: "left"
						}, {view: "button", value: "Save", width: 100, align: "center"}, {
							view: "button", value: "Info", width: 100, align: "right"
						}

						]
					},]
				}, {
					view: "resizer", id: "resizer"
				}, {
					view: "property", id: "sets", width: 300, elements: [
						{label: "属性面板", type: "label"},

						{label: "URL", type: "text", id: "a2", value: "https://hi-app.com/海宝金服/海宝金服测试平台/后端服务/"}, {
							label: "请求方式", type: "select", id: "a3", value: 1, options: [{id: 1, value: "GET"}, {id: 2, value: "POST"}]
						}, {
							label: "测试令牌", type: "text", id: "a4", value: "REST Key", suggest: [{id: 1, value: "REST Key"}, {id: 2, value: "IOS Key"}]
						}, {
							label: "参数选择", type: "multiselect", id: "a5", value: "1,3", options: colors
						}]
				}

				], minHeight: 60
			}]
		};

	}
}