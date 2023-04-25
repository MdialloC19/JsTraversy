let x;
let d=new Date();

x=d.toString();//give us a string representations of the date
x=d.getTime();//give the actual timestamps
x=d.valueOf();//same getTime();

x=d.getFullYear();

x=d.getMonth()+1;// we have to add +1 because they give the month before
x=d.getDay();// give the day of the week;
x=d.getDate();// give the days of the month 

x=d.getHours();// getSeconds();, getMinutes();
x=`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;

//Api Intl
x=Intl.DateTimeFormat('en-US').format(d);
x=Intl.DateTimeFormat('en-GB').format(d);
x=Intl.DateTimeFormat('default').format(d);
x=Intl.DateTimeFormat('default',{month:'long'}).format(d);
x=d.toLocaleDateString('default',{month:'short'});
x=d.toLocaleDateString('default',{
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric',
        hour:'numeric',
        minute:'numeric',
        second:'numeric',
        timeZone:'GMT',
});

console.log(x);