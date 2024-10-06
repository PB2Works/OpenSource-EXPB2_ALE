
function getFlashMovieObject(movieName)
{
	
	if (window.document[movieName])
	{
		//console.log('1) getFlashMovieObject('+movieName+') = '+window.document[movieName]);
		return window.document[movieName];
	}
	if (navigator.appName.indexOf("Microsoft Internet")==-1)
	{
		if (document.embeds && document.embeds[movieName])
		{
			//console.log('2) getFlashMovieObject('+movieName+') = '+document.embeds[movieName] );
			return document.embeds[movieName];
		}
		//else
		//console.log('3) getFlashMovieObject('+movieName+') = ???');
	}
	else
	{
		//console.log('4) getFlashMovieObject('+movieName+') = '+document.getElementById(movieName) );
		return document.getElementById(movieName);
	}
}
var nce=true;
window.onbeforeunload = function()
{
	if (nce)
	{
		nce=false;
		var flashMovie=getFlashMovieObject("swfobj");
		flashMovie.sendTextToFlash('term');
	}
	
	if ( in_game )
	{
		return "Quit? This prompt appears on attempt to close page while playing (either intentially or due to key combination like Ctrl+W that usually closes browser tab).";
	}
}


var in_game = false;

function RedirectTester()
{
	/*
	// Apparently this isn't better
	var flashMovie=getFlashMovieObject("swfobj");
	flashMovie.sendTextToFlash('html_wheel_events');
	
	flashMovie.onwheel = function( e )
	{
		//console.log('flash scroll '+e.deltaY );
		if ( in_game )
		{
			flashMovie.sendTextToFlash( 'w:' + (-e.deltaY) );
			
			e.preventDefault=function(){};
			//e.preventDefault();
			return false;
		}
	}
	*/
}

var sBrowser, sUsrAg = navigator.userAgent;
if (sUsrAg.indexOf("Firefox") > -1) {
  sBrowser = "Mozilla Firefox";
  // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
} else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
  sBrowser = "Opera";
  //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
} else if (sUsrAg.indexOf("Trident") > -1) {
  sBrowser = "Microsoft Internet Explorer";
  // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
} else if (sUsrAg.indexOf("Edge") > -1) {
  sBrowser = "Microsoft Edge";
  // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
} else if (sUsrAg.indexOf("Chrome") > -1) {
  sBrowser = "Google Chrome or Chromium";
  // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
} else if (sUsrAg.indexOf("Safari") > -1) {
  sBrowser = "Apple Safari";
  // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
} else {
  sBrowser = "unknown";
}

function L1( MP_mode )
{
	in_game = true;
	
	var old_width = document.children[0].offsetWidth;
	
	if ( sBrowser === 'Google Chrome or Chromium' )
	document.body.style.overflow = 'hidden';
	
	document.body.style.width = old_width + 'px';
}

function L2()
{
	document.body.style.width = '';
	
	in_game = false;
	
	if ( sBrowser === 'Google Chrome or Chromium' )
	document.body.style.overflow = '';
	
	if ( tts_prepared )
	responsiveVoice.cancel();
}

/*
window.onbeforeunload = function () {//Prevent Ctrl+W
return "Quit?";
};
*/
document.onkeydown = function (e)
{
	if ( !in_game )
	return;
	
	e = e || window.event;//Get event
	if (e.ctrlKey) {
		var c = e.which || e.keyCode;//Get key code
		switch (c) {
			case 83://Block Ctrl+S
			case 87://Block Ctrl+W --Not work in Chrome
				e.preventDefault();     
				e.stopPropagation();
			break;
		}
	}
};

var tts_prepared = false;
var tts_interval = 0;
var tts_maxquota = 2;
var tts_quota = tts_maxquota;
var tts_scheduled_speak = null;
var tts_loaded = false;
function TTS_Prepare()
{
	if ( !tts_prepared )
	{
		tts_prepared = true;
		
		//loadScript( 'https://code.responsivevoice.org/responsivevoice.js', function() { responsiveVoice.init(); _TTS_ready(); } );
		_TTS_ready();
	}
}
function _TTS_ready()
{
	tts_loaded = true;
	
	// Override some bugs
	/*responsiveVoice.initFallbackPool=function()
	{
		var a = responsiveVoice;
		if(!a.fallback_audiopool||0==a.fallback_audiopool.length)
		{
			for(var b=0; 1>b; b++)
			{
				var c=b,d=document.createElement("AUDIO");
				d.preload="auto";
	console.log( 'andr='+a.is_android );
				a.is_android&&(d.src="",d.load(),9==c&&(a.log("Android HTML audio initialized"),a.android_initialized=!0));
				a.iOS&&(d.src="",d.load(),9==c&&(a.log("iOS HTML audio initialized"),a.iOS_initialized=!0));
				a.fallback_audiopool.push(d);
			}
			a.fallback_audiopool_index=0;
		}
	};*/
	
	tts_interval = setInterval( function()
	{
		if ( tts_quota < tts_maxquota )
		tts_quota = Math.min( tts_quota + 1, tts_maxquota );
	}, 500 );
	
	if ( tts_scheduled_speak != null )
	{
		if ( tts_scheduled_speak[ 4 ] === undefined )
		tts_scheduled_speak[ 4 ] = 1;
		
		TTS_Speak( tts_scheduled_speak[ 0 ], tts_scheduled_speak[ 1 ], tts_scheduled_speak[ 2 ], tts_scheduled_speak[ 3 ], tts_scheduled_speak[ 4 ] );
		tts_scheduled_speak = null;
	}
}
var synth = window.speechSynthesis;
var voices = [];
if (speechSynthesis.onvoiceschanged !== undefined)
speechSynthesis.onvoiceschanged = function(){ voices = synth.getVoices(); };

function NativeSpeak( text, voice, volume, pitch, rate=1 )
{
	if ( synth.pending ) // Chrome did stuck there
	synth.cancel();
	
	voices = synth.getVoices();
	
	if ( voice === 'UK English Female' || voice === 'US English Female'	|| voice === 'Fallback UK Female' || voice === 'Latin Female' )
	voice = 'Google UK English Female;Microsoft Zira Desktop - English (United States)';
	
	if ( voice === 'UK English Male' || voice === 'US English Male' )
	voice = 'Google US English;Google UK English Male;Microsoft David Desktop - English (United States)';
	
	var utterThis = new SpeechSynthesisUtterance( text );
	
	var best_pick = null;
	
	var voice_parts = voice.split(';');
	for ( var i = 0; i < voices.length; i++ ) 
	for ( var i2 = 0; i2 < voice_parts.length; i2++ ) 
	if ( voices[ i ].name.trim() === voice_parts[ i2 ].trim() )
	{
		best_pick = voices[ i ];
		i = voices.length;
		i2 = voice_parts.length;
		break;
	}

	if ( best_pick === null )
	{
		for ( var i = 0; i < voices	.length; i++ ) 
		for ( var i2 = 0; i2 < voice_parts.length; i2++ ) 
		if ( voices[ i ].name.indexOf( voice_parts[ i2 ].trim() ) !== -1 )
		{
			best_pick = voices[ i ];
			i = voices.length;
			i2 = voice_parts.length;
			break;
		}
	}
	
	utterThis.voice = best_pick;
	
	utterThis.pitch = pitch;
	utterThis.rate = rate;
	utterThis.volume = volume;
	synth.speak( utterThis );
}
function TTS_Speak( text, voice, pitch, volume, rate=1 )
{
	if ( tts_loaded )
	{
		if ( tts_quota >= 1 )
		{
			tts_quota -= 1;
			
			if ( text.length > 256 )
			text = text.substring( 0, 256 );
			
			//responsiveVoice.speak( text, voice, { volume: volume * 3.5, pitch: pitch } );
			NativeSpeak( text, voice, volume * 3.5, pitch, rate );
		}
	}
	else
	tts_scheduled_speak = [ text, voice, pitch, volume ];
}
/*function loadScript(url, callback)
{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}*/