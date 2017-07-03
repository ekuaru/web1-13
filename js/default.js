var separate_time = function(time){
 var sec  = time.getSeconds();
 var min  = time.getMinutes();
 var hour = time.getHours();
 var days = time.getDates();
 var month = time.getMonth();
 var year = time.getFullYear();
  return [sec, min, hours, days, month, year];
}

var now = new Date();
