// Lab: 

const someMovie = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: [ 'Jackie', 'Living Sneezes' ]
};
console.log(someMovie.title + ' lasts for ' + someMovie.duration + ' minutes. Stars: ' +  someMovie.stars.join(', ') + '.');

// Lab: Tha Reading List

var books = [ 
    {title: "theury of bestashio", 
    author: "fahad", 
    alreadyRead : true},
    {title: "student", 
    author: "mmmm", 
    alreadyRead : false},
    {title: "story", 
    author: "Agatha Chresty", 
    alreadyRead : true}
    ];
  
  for (var i = 0; i < books.length; i++ ){
    if (books[i].alreadyRead === true){
      console.log("You already read " + 
      books[i].title + 
      " by " +
       books[i].author);
    } else if (books[i].alreadyRead === false){
        console.log("You still need to read " +
         books[i].title + " by " + 
         books[i].author + 
         ".");
      }
}

// code Along: Collection

const sourceParagraph = 'This is a this';
const lowercaseParagraph = sourceParagraph.toLowerCase();
const listOfWords = lowercaseParagraph.split(" ");
const wordFrquencies = {};
for (let i = 0; i < listOfWords.length; i++) {
    const key = listOfWords[i];
    // In case the word was not found in the object
    if (wordFrquencies[key] === undefined) {
        wordFrquencies[key] = 1;
    } else {
        // Increment the counter for the existing word
        wordFrquencies[key]++;
    }
}

// object method
const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 2005,
    drive: function(distance){
        return 'vrooooom! we drove' + distance + 'mils';
    },
};


}


  