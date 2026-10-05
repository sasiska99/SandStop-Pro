(function(){
  var r=document.getElementById('boats');
  if(!r)return;
  var f=function(v){return '$'+Math.round(v).toLocaleString('en-US')};
  function u(){
    var n=+r.value,loss=n*696.06;
    document.getElementById('n').textContent=n;
    document.getElementById('loss').textContent=f(loss);
    document.getElementById('save').textContent=f(loss*6);
  }
  r.addEventListener('input',u);u();
})();
