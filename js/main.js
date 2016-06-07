var wavesurfer = WaveSurfer.create({
	container: '#waveform',
	waveColor: 'red',
	barWidth: 1,
	height: 150,
	minPxPerSec: 100
});

var microphone = Object.create(WaveSurfer.Microphone);

microphone.init({
	wavesurfer: wavesurfer,
	bufferSize: 16384
});

microphone.on('deviceReady', function(stream) {
	console.log('Device ready!', stream);
});
microphone.on('deviceError', function(code) {
	console.warn('Device error: ' + code);
});

// pause rendering
//microphone.pause();

// resume rendering
//microphone.play();

// stop visualization and disconnect microphone
//microphone.stopDevice();

// same as stopDevice() but also clears the wavesurfer canvas
//microphone.stop();

// destroy the plugin
//microphone.destroy();
