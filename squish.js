var ffmpeg = require('ffmpeg');

try {
	var process = new ffmpeg('/home/kyle/Documents/bruh/shirttoss.mov');
	process.then(function (video) {
		video.addCommand('-vf', 'scale=iw/2:ih,setsar=1')
		video.save('/home/kyle/Documents/bruh/squished.mov', function (error, file) {
			if (!error)
				console.log('Video file: ' + file);
		});

	}, function (err) {
		console.log('Error: ' + err);
	});
} catch (e) {
	console.log(e.code);
	console.log(e.msg);
}