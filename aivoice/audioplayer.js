


  jQuery(function ($) {
      'use strict'
      var supportsAudio = !!document.createElement('audio').canPlayType;
      if (supportsAudio) {
          // initialize plyr
          var player = new Plyr('#audio1', {
              controls: [
                  'restart',
                  'play',
                  'progress',
                  'current-time',
                  'duration',
                  'mute',
                  'volume',
                  'download'
              ]
          });
          // initialize playlist and controls
          var index = 0,
              playing = false,
              mediaPath = '',
              extension = '',
              tracks = [{
                  "track": 1,
                  //"name": getaudio[0].category,
                    "name": 'Dominate',
                  "duration": "",
                  //"file": commercialDemo
                 // "file": getaudio[0].audioUrl
                  "file": "https://builtat.s3.us-east-2.amazonaws.com/josha+demos/josha-dominate.mp3"
              }, {
                  "track": 2,
                 // "name": getaudio[1].category,
                    "name": 'Driving',
                  "duration": "",
                //  "file": whatevernameofDemo
                 // "file": getaudio[1].audioUrl
                 "file": "https://builtat.s3.us-east-2.amazonaws.com/josha+demos/josha-driving.mp3"
              }, {    
                  "track": 3,
                  //"name": getaudio[2].category,
                  "name": 'Camping',
                  "duration": "",
                  //"file": corporateDemo
                  //"file": getaudio[2].audioUrl
                  "file": "https://builtat.s3.us-east-2.amazonaws.com/josha+demos/josha-camping.mp3"
              }, {
                  "track": 4,
                  //"name": getaudio[3].category,
                  "name": 'Travel',
                  "duration": "",
                  //"file": britishDemo
                  //"file": getaudio[3].audioUrl
                  "file": "https://builtat.s3.us-east-2.amazonaws.com/josha+demos/josha-travel.mp3"
              }],
              buildPlaylist = $.each(tracks, function(key, value) {
                  var trackNumber = value.track,
                      trackName = value.name,
                      trackDuration = value.duration;
                  if (trackNumber.toString().length === 1) {
                      trackNumber = '0' + trackNumber;
                  }
                  $('#plList').append('<li> \
                      <div class="plItem"> \
                          <span class="plNum"></span> \
                          <span class="plTitle">' + trackName + '</span> \
                          <span class="plLength">' + trackDuration + '</span> \
                      </div> \
                  </li>');
              }),
              trackCount = tracks.length,
              npAction = $('#npAction'),
              npTitle = $('#npTitle'),
              audio = $('#audio1').on('play', function () {
                  playing = true;
                  npAction.text('Now Playing...');
              }).on('pause', function () {
                  playing = false;
                  npAction.text('Paused...');
              }).on('ended', function () {
                  npAction.text('Paused...');
                  if ((index + 1) < trackCount) {
                      index++;
                      loadTrack(index);
                      audio.play();
                  } else {
                      audio.pause();
                      index = 0;
                      loadTrack(index);
                  }
              }).get(0),
              btnPrev = $('#btnPrev').on('click', function () {
                  if ((index - 1) > -1) {
                      index--;
                      loadTrack(index);
                      if (playing) {
                          audio.play();
                      }
                  } else {
                      audio.pause();
                      index = 0;
                      loadTrack(index);
                  }
              }),
              btnNext = $('#btnNext').on('click', function () {
                  if ((index + 1) < trackCount) {
                      index++;
                      loadTrack(index);
                      if (playing) {
                          audio.play();
                      }
                  } else {
                      audio.pause();
                      index = 0;
                      loadTrack(index);
                  }
              }),
              li = $('#plList li').on('click', function () {
                  var id = parseInt($(this).index());
                  //if (id !== index) {
                  if (1==1) {  
                      playTrack(id);
                  }
              }),
              loadTrack = function (id) {
                  $('.plSel').removeClass('plSel');
                  $('#plList li:eq(' + id + ')').addClass('plSel');
                  npTitle.text(tracks[id].name);
                  index = id;
                  audio.src = tracks[id].file;
                  updateDownload(id, audio.src);
              },
              updateDownload = function (id, source) {
                  player.on('loadedmetadata', function () {
                      $('a[data-plyr="download"]').attr('href', source);
                  });
              },
              playTrack = function (id) {
                  loadTrack(id);
                  audio.play();
              };
          extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
          loadTrack(index);
      } else {
          // no audio support
          $('.column').addClass('hidden');
          var noSupport = $('#audio1').text();
          $('.container').append('<p class="no-support">' + noSupport + '</p>');
      }
  });
/* })
.catch(error => console.error(error)); */






