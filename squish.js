var ffmpeg = require('ffmpeg');
const yargs = require('yargs');
const crypto = require('crypto');
const {argv} = yargs

const file = argv.file
const type = argv.type
console.log(file)
console.log(type)

if (type == 'image/jpeg') {
	filetype = 'jpg'
}
if (type == 'image/png') {
	filetype = 'png'
}
if (type == 'image/gif') {
	filetype = 'gif'
  }
if (type == 'video/quicktime') {
	filetype = 'mov'
}

try {
	var process = new ffmpeg(`public/images/uploads/${file}`);
	process.then(function (video) {
		video.addCommand('-vf', 'scale=iw/2:ih,setsar=1')
		video.save(`public/images/squished/${file}.${filetype}`, function (error, file) {
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