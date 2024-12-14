let i = 0;
function runLoop() {
    console.log(i);
    i++;
    if (i < 6000) {
        setTimeout(runLoop, 0); 
    }
}
runLoop();