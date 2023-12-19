const os=require('os');

//arch():  give the architecture of our os
console.log(os.arch())



// plaform :the os , mac=darwin , window=win64 or ubuntu= linux
console.log(os.platform())

if(os.platform()==='darwin'){
    console.log('You are on a mac');
}else if(os.platform()==='win32')
    console.log('windows');
else {
    console.log('You are on linux');
}


// cpus : array data about your os : puce, speed, times ...

console.log(os.cpus());

// freemem()

console.log(os.freemem());
console.log(`Free memory : ${os.freemem()/1024/1024/1024} GB`);

// total memeory 

console.log(os.totalmem());
console.log(`Free memory : ${os.totalmem()/1024/1024/1024} GB`);

// homedir
console.log(os.homedir());

// Uptime

function formatUptime(uptimeInSeconds) {
  const days = Math.floor(uptimeInSeconds / (60 * 60 * 24));
  const hours = Math.floor((uptimeInSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((uptimeInSeconds % (60 * 60)) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);
  return `Le système est en marche depuis ${days} jours, ${hours} heures, ${minutes} minutes et ${seconds} secondes.`;
}

const uptime = os.uptime();
console.log(formatUptime(uptime));

// hostname

console.log(os.hostname());