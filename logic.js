
// Start with a fixed set of keywords pertaining to different events within a wedding.
//create a data structure (hash map with events as keys and keywords as values)
var keyWords= {
	'engagement': ['yes', 'proposed', 'proposal'],

    'reception': ['reception'],
    
    'wedding_shower': ['weddingshower', 'shower', 'bridalshower'],
    
    'bachelorette_party' : ['bachelorette'],
    // emojis
    // first dance, father-daughter, father daughter, father/daughter, first kiss, I do, just married, diamond
    // love is a bad keyword "love sucks as a query"
    'wedding_day': ['bigday', 'aisle', 'dance', 'vows', 'father', 'family', 'daughter', 'love', 'cake'],
    
    'rehersal_dinner' : ['tomorrow', 'rehersal']
    };

alert(JSON.stringify(keyWords, null, 4));

var keys = [];
var keyValues = [];
for( var key in keyWords){
  if (keyWords.hasOwnProperty(key)){
    keys.push(key);
    keyValues.push(keyWords[key]);
    
  }
}

alert(keys);
alert(keyValues);
                         
captions = ['shower before my wedding', 'tomorrow is the big day I love everyone', 'love', 'blah', 'larry is smart', 'birnbaum is cool', '395 is the best class ever'];


if(captions.contains(keyValues)){
	return captions.indexOf(keyValues);
}

// Search the photos to see if the captions match any of these keywords.
// For all of the photos that match a given set of keywords, tag those photos with an internal tag.
// Ex: If we’re searching for shower, brunch, gifts, etc. then tag all of these internally with something like wedding_shower
// For each set of internal tags (wedding_shower in the previous example) look for other photos that are temporally close.
// We’re making the assumption that these photos are probably from the same event
// Go ahead and tag them with the similar tag
// Remove the photos from the set to be tagged
// Within each set of tags, pick out the n most-liked photos
// Display the photos from each set, in time order, on the timeline
