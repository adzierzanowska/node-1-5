function convertSecondsToMinutes(seconds) {
    let minutes = Math.floor(seconds / 60); 
    let leftSeconds = seconds % 60;
    return minutes + 'min. ' + leftSeconds + 'sek.';
}

function convertSecondsToHours(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds % 3600 / 60);
    let leftSeconds = seconds % 60;
    return hours + 'godz. ' + minutes + ' min. ' + leftSeconds + 'sek.';
}

module.exports = {
    convertSecondsToMinutes: convertSecondsToMinutes,
    convertSecondsToHours: convertSecondsToHours
};