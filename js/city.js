/* 天气查询——输入框城市查询 */
function citydata(res) {
  let citylist = res.result;
  let list=[];
  $('#input').bind('input propertychange',function(){
    $('li').remove();
    $('ul').show();
    list=[];
    citylist.forEach((element) => {
      if(element.district.indexOf($('#input').val()) == 0) {
        list.push(element.district);
      }
      if($('#input').val()===''){
        $('ul').hide();
      }
    });
    
    for(let i=0;i<list.length;i++){
      $('ul').append("<li id="+i+">"+list[i]+"</li>"); 
      $('#'+i).click(function(){
        if($('#'+i) !== undefined){
          let cityname = $('#'+i)[0].innerText;
          $('input').val(cityname);
          $('ul').hide();
        }
      })
    }
  })
}



