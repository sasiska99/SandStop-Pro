(function(){
  var r=document.getElementById('boats');
  if(!r)return;
  var f=function(v){return '$'+Math.round(v).toLocaleString('en-US')};
  function u(){
    var n=+r.value,loss=n*696.06,cost=n*3*15.15;
    document.getElementById('n').textContent=n;
    document.getElementById('loss').textContent=f(loss);
    document.getElementById('cost').textContent=f(cost);
    document.getElementById('save').textContent=f(loss-cost);
  }
  r.addEventListener('input',u);u();
})();
