var ffmpeg = require('ffmpeg');
const yargs = require('yargs');
const crypto = require('crypto');

const argv = yargs
    .command('filename', 'input file name', {
        file: {
            alias: 'f',
            type: 'string',
        }
    })
    .argv;

const file = argv.file
console.log(file)

try {
	var process = new ffmpeg(`public/images/uploads/${file}`);
	process.then(function (video) {
		video.addCommand('-vf', 'scale=iw/2:ih,setsar=1')
		video.save(`public/images/squished/${file}.mp4`, function (error, file) {
			if (!error)
				console.log('file: ' + file);
		});

	}, function (err) {
		console.log('Error: ' + err);
	});
} catch (e) {
	console.log(e.code);
	console.log(e.msg);
}