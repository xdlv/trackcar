Ext.define('TrackCar.view.TrackRequest', {
	extend : 'Ext.form.Panel',
	xtype : 'trackRequest',
	config : {
		layout : 'vbox',
		items : [ {
			xtype : 'fieldset',
			title : '车位信息',
			instructions : '(车牌支持模糊查询)',
			items : [ {
				xtype : 'textfield',
				label : '车牌号'
			}, {
				xtype : 'button',
				margin : '10 0 0 0',
				height : '40',
				text : '查询',
				ui : 'confirm',
				handler : function() {
					var tr = this.up('tabpanel').down('trackRequest');
					var parent = tr.getParent();
					parent.remove(tr,true);
					parent.add(Ext.create('TrackCar.view.TrackResult',{
						img1: 'img1.jpg',
						img2: 'img2.jpg'
					}));
				}
			} ]
		} ]
	}

});