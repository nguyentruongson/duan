/*
 Highcharts JS v8.1.1 (2020-06-09)

 Support for parallel coordinates in Highcharts

 (c) 2010-2019 Pawel Fus

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/parallel-coordinates",["highcharts"],function(k){b(k);b.Highcharts=k;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function k(b,l,m,e){b.hasOwnProperty(l)||(b[l]=e.apply(null,m))}b=b?b._modules:{};k(b,"modules/parallel-coordinates.src.js",[b["parts/Axis.js"],b["parts/Chart.js"],b["parts/Globals.js"],b["parts/Utilities.js"]],
function(b,l,m,e){function k(a){var d=this.series&&this.series.chart,f=a.apply(this,Array.prototype.slice.call(arguments,1)),b;if(d&&d.hasParallelCoordinates&&!p(f.formattedValue)){var g=d.yAxis[this.x];var c=g.options;d=(b=r(c.tooltipValueFormat,c.labels.format))?w(b,t(this,{value:this.y}),d):g.dateTime?d.time.dateFormat(d.time.resolveDTLFormat(c.dateTimeLabelFormats[g.tickPositions.info.unitName]).main,this.y):c.categories?c.categories[this.y]:this.y;f.formattedValue=f.point.formattedValue=d}return f}
var h=e.addEvent,x=e.arrayMax,y=e.arrayMin,p=e.defined,z=e.erase,t=e.extend,w=e.format,n=e.merge,r=e.pick,q=e.setOptions,u=e.splat,A=e.wrap;e=l.prototype;var v={lineWidth:0,tickLength:0,opposite:!0,type:"category"};q({chart:{parallelCoordinates:!1,parallelAxes:{lineWidth:1,title:{text:"",reserveSpace:!1},labels:{x:0,y:4,align:"center",reserveSpace:!1},offset:0}}});var B=function(){function a(a){this.axis=a}a.prototype.setPosition=function(a,f){var d=this.axis,b=d.chart,c=((this.position||0)+.5)/(b.parallelInfo.counter+
1);b.polar?f.angle=360*c:(f[a[0]]=100*c+"%",d[a[1]]=f[a[1]]=0,d[a[2]]=f[a[2]]=null,d[a[3]]=f[a[3]]=null)};return a}();q=function(){function a(){}a.compose=function(a){a.keepProps.push("parallel");h(a,"init",function(){this.parallelCoordinates||(this.parallelCoordinates=new B(this))});h(a,"afterSetOptions",function(a){var d=this.chart,b=this.parallelCoordinates,c=["left","width","height","top"];d.hasParallelCoordinates&&(d.inverted&&(c=c.reverse()),this.isXAxis?this.options=n(this.options,v,a.userOptions):
(this.options=n(this.options,this.chart.options.chart.parallelAxes,a.userOptions),b.position=r(b.position,d.yAxis.length),b.setPosition(c,this.options)))});h(a,"getSeriesExtremes",function(a){var d=this.chart,b=this.parallelCoordinates;if(b&&d&&d.hasParallelCoordinates&&!this.isXAxis){var c=b.position,f=[];this.series.forEach(function(a){a.visible&&p(a.yData[c])&&f.push(a.yData[c])});this.dataMin=y(f);this.dataMax=x(f);a.preventDefault()}})};return a}();q.compose(b);h(l,"init",function(a){a=a.args[0];
var d=u(a.yAxis||{}),b=d.length,e=[];if(this.hasParallelCoordinates=a.chart&&a.chart.parallelCoordinates){for(this.setParallelInfo(a);b<=this.parallelInfo.counter;b++)e.push({});a.legend||(a.legend={});"undefined"===typeof a.legend.enabled&&(a.legend.enabled=!1);n(!0,a,{boost:{seriesThreshold:Number.MAX_VALUE},plotOptions:{series:{boostThreshold:Number.MAX_VALUE}}});a.yAxis=d.concat(e);a.xAxis=n(v,u(a.xAxis||{})[0])}});h(l,"update",function(a){a=a.options;a.chart&&(p(a.chart.parallelCoordinates)&&
(this.hasParallelCoordinates=a.chart.parallelCoordinates),this.options.chart.parallelAxes=n(this.options.chart.parallelAxes,a.chart.parallelAxes));this.hasParallelCoordinates&&(a.series&&this.setParallelInfo(a),this.yAxis.forEach(function(a){a.update({},!1)}))});t(e,{setParallelInfo:function(a){var b=this;a=a.series;b.parallelInfo={counter:0};a.forEach(function(a){a.data&&(b.parallelInfo.counter=Math.max(b.parallelInfo.counter,a.data.length-1))})}});h(m.Series,"bindAxes",function(a){if(this.chart.hasParallelCoordinates){var b=
this;this.chart.axes.forEach(function(a){b.insert(a.series);a.isDirty=!0});b.xAxis=this.chart.xAxis[0];b.yAxis=this.chart.yAxis[0];a.preventDefault()}});h(m.Series,"afterTranslate",function(){var a=this.chart,b=this.points,e=b&&b.length,h=Number.MAX_VALUE,g;if(this.chart.hasParallelCoordinates){for(g=0;g<e;g++){var c=b[g];if(p(c.y)){c.plotX=a.polar?a.yAxis[g].angleRad||0:a.inverted?a.plotHeight-a.yAxis[g].top+a.plotTop:a.yAxis[g].left-a.plotLeft;c.clientX=c.plotX;c.plotY=a.yAxis[g].translate(c.y,
!1,!0,null,!0);"undefined"!==typeof k&&(h=Math.min(h,Math.abs(c.plotX-k)));var k=c.plotX;c.isInside=a.isInsidePlot(c.plotX,c.plotY,a.inverted)}else c.isNull=!0}this.closestPointRangePx=h}},{order:1});h(m.Series,"destroy",function(){this.chart.hasParallelCoordinates&&(this.chart.axes||[]).forEach(function(a){a&&a.series&&(z(a.series,this),a.isDirty=a.forceRedraw=!0)},this)});["line","spline"].forEach(function(a){A(m.seriesTypes[a].prototype.pointClass.prototype,"getLabelConfig",k)});return q});k(b,
"masters/modules/parallel-coordinates.src.js",[],function(){})});
//# sourceMappingURL=parallel-coordinates.js.map