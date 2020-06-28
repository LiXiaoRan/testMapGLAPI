/**
 * @file 加载地图
 */

let map=new BMapGL.Map("container")//创建地图实例
let point=new BMapGL.Point(116.404, 39.915); //创建点坐标
map.centerAndZoom(point,15);

