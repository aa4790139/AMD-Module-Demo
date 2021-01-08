require.config({
    //可以把下面共同指向js文件夹写在这个位置
    baseUrl: 'js',
    //path可以让我省略冗长的地址信息
    paths: {
        //可以配置多个路径，当js请求不成功，可以有备选路径
        jquery: ["https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery", "jquery"],
        //define中再依赖其他模块
        dependModule: "dependModule",
        //define遵从AMD的写法
        amdModule: "amdModule",
        //export一个对象
        exportObjModule: "exportObjModule",
        //export一个函数
        exportFunModule: "exportFunModule",
        //init暴露多个变量
		exportMultiVarModule: "exportMultiVarModule"
    },
    //非AMD规范时候的兼容写法
    //export暴露出对应的对象和方法
    shim: {
        exportObjModule: {
            //导出对象
            exports: "obj",
        },
        exportFunModule: {
            //导出方法
            exports: "fun4"
        },
        exportMultiVarModule: {
            //导入多个变量
            init: function() {
                return {
                    fun5: fun5,
                    fun6: fun6
                }
            }
        }
    }
})
//注入对应依赖，当依赖都请求成功后执行对应的回调函数
require(["jquery", "dependModule", "exportObjModule", "exportFunModule","exportMultiVarModule"], function ($, dependModule, exportObjModule, exportFunModule, exportMultiVarModule) {
    console.log($('span'));
    $('span').css('color', '#673AB7');
    console.log("-------------");
    console.log("dependModule.f3(): " + dependModule.f3());
    console.log("-------------");
    console.log("exportObjModule:");
    console.log(exportObjModule);
    console.log("-------------");
    console.log("exportFunModule:");
    console.log(exportFunModule);
    console.log("-------------");
    console.log("exportMultiVarModule:" + exportMultiVarModule);
    console.log(exportMultiVarModule);
    console.log("-------------");
});