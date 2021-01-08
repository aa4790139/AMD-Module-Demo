require.config({
    baseUrl: 'js',
    paths: {
        jquery: ["https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery", "jquery"],
        math: "math"
    },
})
require(["jquery", "math"], function ($,math) {
    console.log($('span'));
    alert(math.add(1,2));
});