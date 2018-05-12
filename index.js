var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    // tutaj treść tego co ma się wykonać w momencie odczytania wejścia.
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch(instruction) {
            case '/exit': 
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            case '/node_version':
                console.log(process.versions.node);
                break;
            case '/node_language':
                console.log(process.env.LANG);
                break;
            default:
                process.stderr.write('Wrong instruction!');
        }
    }
});
