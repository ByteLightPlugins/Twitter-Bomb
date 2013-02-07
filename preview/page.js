$(function() {
  
  data = JSON.parse(BL.getContentForPreview().content[0].data);
  
  $('button').on('click', function() {
    BL.authorizeTwitter();
  })
  
  if (BL.twitterAuthenticated()) {
    $('#twee').show()
    BL.tweet(data.tweetText, true, data.oncePerSession, function() {
      $('#tweet').text('You just tweeted: ' + data.tweetText);
    })
  }
  else {
    $('button').show()
  }
    
  BL.previewReady(); // this is what tells the preview page to display this component - must be called
})