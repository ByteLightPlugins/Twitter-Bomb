$(function() {
  
  data = JSON.parse(BL.getContentForPreview().content[0].data);
  
  $('button').on('click', function() {
    BL.authorizeTwitter();
  })
  
  if (!BL.twitterAuthenticated(function() {
    $('button').hide();
    BL.previewReady(); 
    
    BL.tweet(data.tweetText, true, data.oncePerSession, function() {
      $('#tweet').text(tweetText);
      $('#tweet').show();
      BL.previewReady(); 
      var tweetText = 'You just tweeted: ' + data.tweetText;
      alert(tweetText)
    })
  })) {
    $('button').show()
  }
    
  BL.previewReady(); // this is what tells the preview page to display this component - must be called
})