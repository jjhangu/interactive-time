실시간 작성일
============

날짜 표시형태
------------

>
[현재 시각]                 [글 등록 ]      [출력 시각]  
 07/23/2015 15:15:38 , 07/23/2015 15:14:58       방금  
 07/23/2015 15:15:38 , 07/23/2015 15:14:38       1분  
 07/23/2015 15:15:38 , 07/23/2015 15:12:38       3분  
 07/23/2015 15:15:38 , 07/23/2015 14:15:38       60분  
 07/23/2015 15:15:38 , 07/23/2015 14:12:38       1시간  
 07/23/2015 15:15:38 , 07/22/2015 19:15:38       20시간  
 07/23/2015 15:15:38 , 07/22/2015 15:15:38       어제 오전 15:15  
 07/23/2015 15:15:38 , 07/22/2015 07:15:38       어제 오전 7:15  
 07/23/2015 15:15:38 , 06/23/2015 15:15:38       6월 23일 오전 15:15  
 07/23/2015 15:15:38 , 01/24/2015 15:15:38       1월 24일 오전 15:15  
 07/23/2015 15:15:38 , 12/25/2014 15:15:38       2014년 12월 25일  
 07/23/2015 15:15:38 , 07/23/2013 15:15:38       2013년 7월 23일  
 
 
 
사용 방법
---------

- **init()**은 최초 한번만 실행한다
- 변환하고자 하는 **long type** 의 시간값으로 **setLongTime(time)** 호출
- **getConvertedTime()** 으로 변환된 String값을 가져온다.
 
```
<script src='lib/Interactive-time.js'></script>
<script>
  it.init(); // 최초 1번만 실행
  it.setLongTime(time); // 변환하고자 하는 longtype data
  var convertedTime= it.getConvertedTime(); // time의  converted time 가져오기
  document.getElementById('id').innerHTML = convertedTime;
</script>
```

------


