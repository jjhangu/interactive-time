실시간 작성일
============



사용 방법
--------

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

표시법
--------

