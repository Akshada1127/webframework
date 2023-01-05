

const EventEmitter = require('events');
var events=require('events')
var em=new EventEmitter()
em.on('power',function(a,b)
{
    power=a;
    for(var i=2;i<=b;i++)
    power=power*a
    console.log("Power is:",power)
  

});
em.emit('power',8,3)