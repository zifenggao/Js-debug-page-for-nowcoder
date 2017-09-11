/*加载js文件*/
var excute = function(){
    var script = document.createElement("script");
    script.src = "./code/demo.js";
    document.body.appendChild(script);
}


/*读取一行数据*/
var readline = function () {
    var data = '\n' + document.getElementById('data').value + '\n';

    readline.count = ++readline.count || 1;

    var line = [],
        nNum =0;

    for(var i = 1,vlen = data.length; i < vlen; i++){
        if(data[i] === '\n'){
            nNum +=1;
        }

        if(nNum === readline.count){
            for(var ii = i-1; data[ii] != '\n'; ii--){
                line.push(data[ii]);
            }

            line = line.reverse();

            for(var ii = 0;ii<line.length;ii++){
                /*if(line[ii] === ' ' || line[ii] === ',') {
                    line.splice(ii, 1);
                }*/
            }

            return line.join('');   //返回的是字符串类型
            //break;
        }
    }

}

/*重测数据*/
var repeat = function(){
    var con = document.getElementById('data').value;
    /*window.location = './entry.html';
    //document.getElementById('data').innerHTML = con;
    $('#data').val(con);*/

    readline.count = undefined;
    document.getElementById('result').innerHTML = '';
}

/*更新页面 清空输入框*/
var update = function () {
        window.location = './entry.html';
}

/*输出函数*/
var print = function (data) {
    //console.log(data);
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').innerHTML = data;
}
