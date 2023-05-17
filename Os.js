// OS is a built in Node global object that allows the user to recieve information about their computer operating system

// first we import the OS global object
const os = require("os");

// This is just for better readability in the terminal
console.log(" ");

// there are many different functions that are included in the os module, here I have provided some for example

// This function determines the total memory that the current device has overall
var TotalMem = os.totalmem();
console.log("Devices Total Memory: " + TotalMem + " Bytes");

// This function determines the memory that is available for use on the device
var AvailableMem = os.freemem();
console.log("Devices Current Available Memory: " + AvailableMem + " Bytes");

// This function calcultes the total time that the device has been on and running
var Uptime = os.uptime();
console.log("Your device has been running for: " + Uptime + " Seconds");

// This function returns the name Given to the current device
var DeviceName = os.hostname();
console.log("Name Given To Device: " + DeviceName);

// This function returns the current device version (Ex mine returns "Windows 10")
var DeviceVersion = os.version();
console.log("Current Version: " + DeviceVersion);

// Another Log to enhance the readabilty of examples
console.log(" ");
