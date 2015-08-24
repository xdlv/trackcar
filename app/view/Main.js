Ext.define('TrackCar.view.Main', {
	extend : 'Ext.tab.Panel',
	xtype : 'main',
	requires : [ 'Ext.TitleBar','TrackCar.view.TrackResult','TrackCar.view.TrackRequest' ],
	config : {
		tabBarPosition : 'bottom',
		items : [ {
			title : '主界面',
			iconCls : 'home',
			styleHtmlContent : true,
			scrollable : true,
			layout: {
			    type: 'vbox'
			},
			items : [ {
				docked : 'top',
				xtype : 'titlebar',
				title : '车位引导系统'
			}, {
				xtype : 'trackRequest',
				flex : 1
			} ]
		}, {
			title : '联系我们',
			iconCls : 'user',

			items : [ {
				docked : 'top',
				xtype : 'titlebar',
				title : '联系我们'
			},{
				xtype : 'label',
				html: '电话：15951928975 <br> 网站：www.fzc.cn'
			} ]
		} ]
	}
});
