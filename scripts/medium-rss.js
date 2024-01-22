$(function () {
  var $content = $('#medium-content');
  var data = {
    rss_url: 'http://medium.com/feed/@mfrashad'
  };
  $.get('https://api.rss2json.com/v1/api.json', data, function (response) {
    if (response.status == 'ok') {
      var output = '';
      $.each(response.items, function (k, item) {
        var visibleSm;
        if(k < 3){
          visibleSm = '';
        } else {
           visibleSm = ' visible-sm';
        }
        
        
        var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        var pubDate =  new Date(item.pubDate).toLocaleDateString("en-US", dateOptions);
        var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
        var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
        var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
        var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
        var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
        var yourString = item.description.replace(/<img[^>]*>/g,""); //replace with your string.
        var pStart = yourString.indexOf('<p'); // Find where the p tag starts
        var maxLength = 120 // maximum number of characters to extract
        //trim the string to the maximum length
        var trimmedString = yourString.substr(pStart, maxLength+pStart);
        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        output += 
        `<a href="${item.link}" target="_blank">
          <div class="blog-wrap" data-animation="fade-in">
            <div class="fade-wrap">
              <div class="thumb" style="background: url('${src}') center center/cover;">
              </div>
              <div class="label bold">${item.title}</div>
              <div class="date">${pubDate}</div>
              <div class="bar"></div>
              <div class="text">
                ${trimmedString}...
              </div>
            </div>
          </div>
        </a>`    
        return k < 3;
      });
      $content.html(output);
    }
  });
});