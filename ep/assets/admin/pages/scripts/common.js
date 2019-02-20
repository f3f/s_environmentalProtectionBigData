/**
 * json数据填充form
 * 
 * @param frm
 * @param data
 */
function populate(frm, data) { 
	for(key in data){
		var $ctrl = $('[name='+key+']', frm);  
	    switch($ctrl.attr("type"))  
	    {  
	        case "text" :   
	        case "hidden":  
	        $ctrl.val(data[key]);   
	        break;   
	        case "radio" : case "checkbox":   
	        $ctrl.each(function(){
	           if($(this).attr('value') == data[key]) {  $(this).attr("checked",data[key]); } });   
	        break;  
	        default:
	        $ctrl.val(data[key]); 
	    }  
	}
}

function randomData(p) {
    return Math.round(Math.random()*p);
}

function initEchart(id){
	var chart = echarts.init(document.getElementById(id));
	chart.setOption(eval(id + '()'));
	//console.log(chart);
	return chart;
}

jQuery.validator.addMethod("isPhone", function(value, element) {
		var length = value.length;
		var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;
		return this.optional(element) || (length == 11 && mobile.test(value));
}, "请正确填写您的手机号码");
bootbox.setDefaults({locale:'zh_CN'});

$.extend(true, $.fn.dataTable.defaults, {
	searching:false,
	bServerSide : true,
	bPaginate : true,
	bInfo : true,
    dom : "<'row'<'col-md-8 col-sm-12'<'table-group-search'>><'col-md-4 col-sm-12'<'table-group-actions pull-right'>>Rr> <'table-scrollable't><'row'<'col-md-5 col-sm-12'li><'col-md-7 col-sm-12'p>>",
    language : {
		"sProcessing" : "处理中...",
		"lengthMenu": "显示 _MENU_ 记录",
		"sZeroRecords" : "没有匹配结果",
		"info" : "<span class='seperator'>|</span>共 _TOTAL_ 项",
		"sInfoEmpty" : "共 0 项",
		"sInfoFiltered" : "(由 _MAX_ 项结果过滤)",
		"sInfoPostFix" : "",
		"sSearch" : "搜索:",
		"sUrl" : "",
		"sEmptyTable" : "表中数据为空",
        "sLoadingRecords": "载入中...",
        "sInfoThousands": ",",
        "oPaginate": {
            "sFirst": "首页",
            "sPrevious": "上页",
            "sNext": "下页",
            "sLast": "末页"
        },
        "oAria": {
            "sSortAscending": ": 以升序排列此列",
            "sSortDescending": ": 以降序排列此列"
        }
    }
});
$.fn.dataTableExt.oStdClasses.sWrapper = $.fn.dataTableExt.oStdClasses.sWrapper + " dataTables_extended_wrapper";

