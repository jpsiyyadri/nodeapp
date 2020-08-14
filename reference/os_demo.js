const os = require('os')

// geth the platform
console.log(os.platform())

// cpu architecture
console.log(os.arch())

// cpu core info
console.log(os.cpus())

// free memory
console.log(os.freemem())

// total memory
console.log(os.totalmem())

// home directory
console.log(os.homedir())

// up time
console.log(os.uptime())