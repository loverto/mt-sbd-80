var os= require('os');

//获取cpu(处理器架构)
var arch=os.arch();
console.log(arch);

//获取cpu信息2113
var cpus=os.cpus();
console.log(cpus);

//字节顺序 高位5261优先返回BE,低位优先的4102返回LE
var endianness=os.endianness();
console.log(endianness);

//空闲内存字节
var freemem=os.freemem()
console.log(freemem);

//当前登录用户的根目录
var homedir=os.homedir();
console.log(homedir);

//操作1653系统主机名
var hostname=os.hostname()
console.log(hostname);

//系统最近5、10、15分钟的平均负载,这是一个针对linux或unix的统计，windows下始终返回[0,0,0]
var loadavg=os.loadavg();
console.log(loadavg);

//网络配置列表
var networkInterfaces=os.networkInterfaces();
console.log(networkInterfaces);

//操作系统类型,返回值有'darwin', 'freebsd', 'linux', 'sunos' , 'win32'
var platform=os.platform();
console.log(platform);

//操作系统版本
var release=os.release();
console.log(release);

//操作系统临时文件的默认目录
var tmpdir=os.tmpdir()
console.log(tmpdir);

//系统总内存
var totalmem=os.totalmem()
console.log(totalmem);


const {machineId, machineIdSync} = require('node-machine-id');

console.log(machineIdSync());
console.log(machineId());
