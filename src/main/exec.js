const child_process_1 = require("child_process");
const log = require('electron-log');
log.info("starting exec ")


function main() {
    let storePath = process.env.storePath;
    log.info("exec 路径:" + storePath)
    let childProcess = child_process_1.fork(__dirname + "/mt3m.js", {env: {storePath: storePath}});
    childProcess.on('message', function (m) {
        process.send(m);
    })
}

main();

