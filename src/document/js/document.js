bc.utils.ready(function () {
  const documentList = document.querySelectorAll('.dl-document');
  documentList.forEach(function(el) {
    el.addEventListener('click', function(event) {
      ga('send', 'event', 'document', 'click', event.currentTarget.getAttribute('href'));
    });
  });
});
