module.exports = {

    timeFunc(callback) {
        var start = new Date();
        console.log(callback);
        var end = new Date();
        console.log((end - start) / 1000, 'seconds');
    }
};
