(function() {
  'use strict';

  $(() => {
    $('.dl-document').click((event) => {
		  ga('send', 'event', 'document', 'click', $(event.currentTarget).attr('href'));
    });
  });
}());
