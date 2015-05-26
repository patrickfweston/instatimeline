
// Start with a fixed set of keywords pertaining to different events within a wedding.
//create a data structure (hash map with events as keys and keywords as values)
var keyWords= {
    'engagement': ['yes', 'proposed', 'proposal'],

    'reception': ['reception'],
    
    'wedding_shower': ['wedding shower', 'shower', 'bridal'],
    
    'bachelorette_party' : ['bachelorette', 'party'],
    // emojis
    // first dance, father-daughter, father daughter, father/daughter, first kiss, I do, just married, diamond
    'wedding_day': [ 'I do', 'big day', 'aisle', 'dance', 'vows', 'father', 'family', 'daughter', 'father daughter', 'cake', 'diamond', 'first kiss', 'just married'],
    
    'rehersal_dinner' : ['tomorrow', 'rehersal', 'dinner']
    };




    
var keys = [];
var keyValues = [];
for( var key in keyWords){
  if (keyWords.hasOwnProperty(key)){
    keys.push(key);
    keyValues.push(keyWords[key]);
    
  }
}

                         
var captions = "I love my big day because there is an aisle";
alert(keys)


    for (var i in keyWords['wedding_day']) {
    var index = new RegExp("\\b" + keyWords['wedding_day'][i] + "\\b", "i");
    if (captions.match(index)) {
        alert(keyWords['wedding_day'][i]);
        // do something
    }
}
