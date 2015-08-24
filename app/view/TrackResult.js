Ext.define('TrackCar.view.TrackResult', {
	extend : 'Ext.Panel',
	xtype : 'trackResult',
	config : {
		layout : 'fit',
		items : [ {
			xtype : 'img',
			width : 300,
			height : 300,
			flex: 1,
		}, {
			xtype : 'img',
			width : 300,
			height : 300,
			flex: 1
		} ]
	},
	constructor : function(config) {
		this.callParent([ config ]);
		this.config = config;
	},
	initialize : function() {
		this.callParent();
		var imgs = this.query('img');
		imgs[0].setSrc(this.config.img1);
		imgs[1].setSrc(this.config.img2);

	}
});