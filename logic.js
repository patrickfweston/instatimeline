
// Start with a fixed set of keywords pertaining to different events within a wedding.
//create a data structure (hash map with events as keys and keywords as values)
var keyWords= {
	'engagement': ['yes', 'proposed', 'proposal'],
    'reception': ['reception'],
    'wedding_shower': ['weddingshower', 'shower', 'bridalshower'],
    'bachelorette_party' : ['bachelorette'],
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


