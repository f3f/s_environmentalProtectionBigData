var Page = function(){
	var userTable,projectTable,docTable;
	var columns=[
		{
			sTitle:'姓名',
			data : "name",
		},
		{
			sTitle:'性别',
			data : "gender",
		},
		{   sTitle:'年龄',
			data : "age",
		},
		{
			sTitle:'工作经验',
			data : "exp",
		},
		{
			sTitle:'学历',
			data : "degree",
		},
		{
			sTitle:'专业',
			"bVisible" : true,
			data : "major",
		},
		{
			sTitle:'居住地',
			"bVisible" : true,
			data : "add",
		},
		{
			sTitle:'评级',
			"bVisible" : true,
			data : "level",
			"mRender" : function(data, type, full) {
				if(data>0 && data <4){
					return '<span class="label label-sm label-success"> '+data+'级 </span>';
				}else if(data>=4 && data <6){
					return '<span class="label label-sm label-warning"> '+data+'级 </span>';
				}else{
					return '<span class="label label-sm label-danger"> '+data+'级 </span>';
				}
				
			}
		},
		{
			sTitle:'更新时间',
			"bVisible" : true,
			data : "update_time",
		},
		{
			sTitle:'操作',
			"bSortable": false ,
			data : "id",
			"mRender" : function(data, type, full) {
				return '<a class="btn btn-xs green" onClick="Page.editUser('+data+')"> <i class="fa fa-edit">查看简历</i> </a>';
			}
		}];
	var initUserTable = function() {
		userTable = $('#user_list').DataTable({
			bServerSide:false,
			data: [{name:'费先生',gender:'男',age:28,exp:'6年以上',degree:'硕士',major:'环境科学',add:'南京市',level:2,update_time:'2016-4-12'},
			       {name:'闫女士',gender:'女',age:29,exp:'9年以上',degree:'本科',major:'环境工程',add:'南京市',level:4,update_time:'2016-4-12'},
			       {name:'李先生',gender:'男',age:32,exp:'9年以上',degree:'本科',major:'环境工程',add:'北京市',level:6,update_time:'2016-4-12'},
			       {name:'刘先生',gender:'男',age:39,exp:'9年以上',degree:'本科',major:'环境科学',add:'成都市',level:2,update_time:'2016-4-12'},
			       {name:'程先生',gender:'男',age:30,exp:'9年以上',degree:'本科',major:'环境科学',add:'北京市',level:2,update_time:'2016-4-12'},
			       {name:'成先生',gender:'男',age:35,exp:'6年以上',degree:'硕士',major:'环境工程',add:'南京市',level:5,update_time:'2016-4-12'},
			       {name:'陆先生',gender:'男',age:29,exp:'9年以上',degree:'本科',major:'环境工程',add:'武汉市',level:2,update_time:'2016-4-12'},
			       {name:'聂先生',gender:'男',age:53,exp:'6年以上',degree:'本科',major:'环境工程',add:'扬州市',level:7,update_time:'2016-4-12'},
			       {name:'邹先生',gender:'男',age:33,exp:'9年以上',degree:'本科',major:'环境工程',add:'南京市',level:2,update_time:'2016-4-12'},
			       {name:'张先生',gender:'男',age:34,exp:'9年以上',degree:'本科',major:'电子信息科学与技术',add:'南京市',level:2,update_time:'2016-4-12'},
			       {name:'王先生',gender:'男',age:34,exp:'6年以上',degree:'硕士',major:'环境工程',add:'扬州市',level:2,update_time:'2016-4-12'},
			       {name:'鲁先生',gender:'男',age:34,exp:'9年以上',degree:'本科',major:'环境工程',add:'武汉市',level:2,update_time:'2016-4-12'}],
			columnDefs:[{
				targets : '_all',
				className : "column-left"
			}],
			"aoColumns" : columns
        });
	}
	
	var initProjectTable = function(){
		projectTable = $('#project_list').DataTable({
			bServerSide:false,
			data: [{name:'青岛市市南区江西路加油站',company:'青岛市市南区江西路加油站',organization:'青岛中油华东院安全环保有限公司',process:'二次公示'},
			       {name:'茂名市茂南区中医院',company:'茂名市茂南城建矿业开发有限公司',organization:'茂名市环科技术咨询有限公司',process:'审批公示'},
			       {name:'茂名市区垃圾焚烧飞灰处置工程',company:'高州市新绿州环保资源开发有限公司',organization:'茂名市环科技术咨询有限公司',process:'环评全本'},
			       {name:'年产氮化钒铁2000吨生产加工项目',company:'崇阳中瑞矿业有限公司',organization:"宁夏智诚安环科技发展有限公司",process:'一次公示'}],
			columnDefs:[{
				targets : '_all',
				className : "column-left"
			}],
			"aoColumns" : [{
					sTitle:'项目名称',
					data : "name",
				},{
					sTitle:'建设单位',
					data : "company",
				},{
					sTitle:'评价机构',
					data : "organization",
				},{
					sTitle:'审批流程',
					data : "process",
				},{
					sTitle:'操作',
					"bSortable": false ,
					data : "id",
					"mRender" : function(data, type, full) {
						return '<a href="javascript:;" class="btn btn-sm blue"><i class="fa fa-file-o"></i>查看详情</a>';
					}}]
        });
	}
	
	var initDocTable = function(){
		docTable = $('#doc_list').DataTable({
			bServerSide:false,
			data: [{name:'环评基础知识培训',type:'word',size:'16M'},
			       {name:'环境影响评价知识点总结',type:'word',size:'6M'},
			       {name:'环评流程图',type:'ppt',size:'1M'},
			       {name:'环境评价模型',type:'word',size:'5M'},
			       {name:'资源环境评价',type:'excel',size:'3M'},
			       {name:'如何进行环境影响评价',type:'word',size:'2M'}
			      ],
			columnDefs:[{
				targets : '_all',
				className : "column-left"
			}],
			"aoColumns" : [{
					sTitle:'文档名称',
					data : "name",
				},{
					sTitle:'文档类型',
					data : "type",
				},{
					sTitle:'文档大小',
					data : "size",
				},{
					sTitle:'操作',
					"bSortable": false ,
					data : "id",
					"mRender" : function(data, type, full) {
						return '<a href="javascript:;" class="btn btn-sm blue"><i class="fa fa-file-o"></i>下载</a>';
					}}]
        });
	}
	
	return {
		init:function(){
			initUserTable();
			initProjectTable();
			initDocTable();
		}
	}
}();