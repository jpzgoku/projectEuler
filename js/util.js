module.exports = {

    timeFunc(callback) {
        var start = new Date().getTime() / 1000;
        console.log(callback);
        var end = new Date().getTime() / 1000;
        console.log(end - start, 'seconds');
    }
};
