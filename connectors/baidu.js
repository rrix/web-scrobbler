'use strict';

Connector.playerSelector = '#playPanel > .panel-inner';

Connector.artistSelector = '.artist';

Connector.trackSelector = '.songname';

Connector.currentTimeSelector = '.curTime';

Connector.durationSelector = '.totalTime';

Connector.isPlaying = () => !$('.play').hasClass('stop');
