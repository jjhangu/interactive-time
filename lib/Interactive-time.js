/**
 * Created by ddavid on 2015-07-22.
 */
var it = {

    realLanguage : [],
//                    0       1      2         3        4       5       6       7    8
    language_kr : ['방금', '분', '시간', '어제', '오전', '오후', '년', '월', '일'   ],

    // 컴퓨터관점 현재
    currentTime : null, // long Type
    currentDate : new Date(), // Date Type

    writtenTime : null, // long Type
    writtenDate : new Date(),
    convertedTime : null, // string Type

    init : function(){
        var date = new Date();
        var time  = date.getTime();
        it.currentDate= date;
        it.currentTime  = time;
        // 랭귀지 init

        it.realLanguage = it.language_kr;
    },

    setLongTime :function (longTime) {
        it.writtenTime = longTime;
        it.writtenDate = new Date(it.writtenTime);
        return it;
    },

    getRealTime : function(){
        return it.writtenTime;
    },

    getConvertedTime : function(){
        // 1000 1초
        // 1000* 60 1분
        // 하루전

        var between = it.currentTime - it.writtenTime;
        if( between < 60000 ){ // 1min 60000
            return it.realLanguage[0];
        }else if(between <= 3600000 ){ // 1h 1000 * 60 * 60 = 3600000
            return parseInt(between / (1000*60)) + it.realLanguage[1];
        }else if(between < 86400000 ){ // 1 day  1000 * 60 * 60 * 24
            return parseInt(between / ( 3600000 )) + it.realLanguage[2];
        }else if(between < 172800000 ){ // 2 day  1000 * 60 * 60 * 24 * 2 = 172800000
            var sunOrMoon = it.realLanguage[4];
            if(it.writtenDate.getHours() >= 12){
                sunOrMoon = it.realLanguage[4];
            }
            if((it.currentDate.getDate() +1) - (it.writtenDate.getDate() +1) == 1){// day 가 1일 차이가 날때
                return it.realLanguage[3] +" " +sunOrMoon  + " " + it.writtenDate.getHours() +":"+ it.writtenDate.getMinutes();
            }else{ // day 가 2일차이가 나면
                return (it.writtenDate.getMonth() + 1) +  it.realLanguage[7] + " "
                    +(it.writtenDate.getDate() +1) + " " + it.realLanguage[8] +" " + sunOrMoon + " " +it.writtenDate.getHours() +":"+ it.writtenDate.getMinutes();
            }
        }else {
            var sunOrMoon = it.realLanguage[4];
            if(it.writtenDate.getHours() >= 12){
                sunOrMoon = it.realLanguage[4];
            }
             if(it.currentDate.getFullYear() - it.writtenDate.getFullYear() ==0){ // 똑같은 년도
                return (it.writtenDate.getMonth() + 1) +  it.realLanguage[7] + " "
                    +(it.writtenDate.getDate() +1) + it.realLanguage[8] +" " + sunOrMoon + " " +it.writtenDate.getHours() +":"+ it.writtenDate.getMinutes();
             }else{ // 다른년도
                return it.writtenDate.getFullYear() +""+it.realLanguage[6] + " "
                 + (it.writtenDate.getMonth() + 1)   + it.realLanguage[7]
                 + " "+(it.writtenDate.getDate() +1)  + it.realLanguage[8];
             }
        }
    }
};
