export function getReviews() {
	return data;
}

var dateFormat = webix.Date.strToDate("%Y-%m-%d");

const data = new webix.DataCollection({
	data: [
		{
			id: 1,
			mark: 1,
			photo: "17_avatar_middle",
			name: "张鹏",
			stars: 5,
			date: "2022-01-23",
			text: "前端界面出现一处问题,参考XD-1132号报告。",
			tag: "New"
		},
		{
			id: 2,
			mark: 0,
			photo: "36_avatar_middle",
			name: "王晓非",
			stars: 5,
			date: "2022-01-19",
			text: "请重新针对用户进行标签分组,以便后台数据推送能够及时送达,现有粒度不够细化",
			tag: "Pending"
		},
		{
			id: 3,
			mark: 0,
			photo: "54_avatar_middle",
			name: "何宝贵",
			stars: 5,
			date: "2022-01-12",
			text: "后台用户上传图片的时候提示容量不组,不知道是不是用户上传文件容量过大,是否需要扩充容量?",
			tag: "New"
		},
		{
			id: 4,
			mark: 1,
			photo: "57_avatar_middle",
			name: "于力克",
			stars: 5,
			date: "2022-01-9",
			text: "用户提示邮件收不到.注册信息收不到,请参考XU-0992号报告 " ,
			tag: "Pending"
		},
		{
			id: 5,
			mark: 0,
			photo: "74_avatar_middle",
			name: "马强",
			stars: 5,
			date: "2022-01-3",
			text: "Hi,我这边用手机浏览器测试,有一个页面轮播没有正常显示,请参见'信息查询'栏目中的'热点问题'一栏,未知便宜了几个像素" ,
			tag: "New"
		}
	],
	scheme: {
		$init: (obj) => {
			obj.date = dateFormat(obj.date);
		}
	}
});
