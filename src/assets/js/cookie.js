export function setCookie(key,value) {
    var exdate = new Date();//获取时间
    exdate.setTime(exdate.getTime() + 24 * 60 *60); //保存的天数，一天
    //字符串拼接cookie
    window.document.cookie = key + "=" + value + ";path=/;expires=" + exdate.toGMTString();
}

//读取cookie
export function getCookie(param) {
    var c_param = '';
    if (document.cookie.length > 0) {
        console.log("原document cookie： " + document.cookie);
        var arr = document.cookie.split('; '); //获取key value数组
        for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('='); //获取该key 下面的 value数组
            if(arr2[0] == param) {
                c_param = arr2[1];

            }
        }

        return c_param;
    }
}

function padLeftZero (str) {
    return ('00' + str).substr(str.length);
  };