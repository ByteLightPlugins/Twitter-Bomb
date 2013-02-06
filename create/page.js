$(function() {
  
  $('button').on('click', function() {
    errors = BL.validateInput($('#tweetText'))
    if (errors) {
      return;
    }
    
    json = {
      tweetText: $('#tweetText').val(),
      oncePerSession: $('#oncePerSession').is(':checked')
    }
    
    BL.createContent(JSON.stringify(json))
  })
  
})