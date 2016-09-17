//Todo: case insensitive
//Todo: animate blur effect
//Todo: gradual blurring


$(document).ready(function() {

  var allWords = [];
  var repeatedWords = [];

//on click submit, thank you message

  var memories = [
    'My family and I would go camping every summer. I loved making s\'mores, cooking hot dogs, and fishing together!',
    'My first dog\'s name was George. My father brought him home as a surprise when I was 4 years old. I\'ll never forget the look of anger on my mother\'s face when she saw that dog for the first time.',
    'Telling my mother I was sick, then staying home from school and watching "The Price is Right"',
    'When I was teaching in Japan, all the English teachers in my area would meet up on Fridays for conveyor belt sushi dinner. We would eat so much!',
    'Staying up too late before a test playing video games.',
    'The first Pumpkin Spice Latte of the season every year!',
    'I remember moving out on my own for the first time into my first apartment. I was so happy to be on my own I slept there the first night even though I didn\'t have any furniture yet!',
  ];

  //add new memories to array on click

  $('.textInput').focus(function() {
    $(this).val('');
  });

  $('.submitButton').click(function() {
    memories.unshift( $('.textInput').val() );
    reDraw();
  })

  function reDraw() {
  $('.projMems').empty();

  for (i = 0; i < memories.length; i++) {

    $('.projMems').append('<div class="item item' + i + '">');
    var memArray = memories[i].split(' ');

    //individual words in memories, memArray[j] is a single word.
    for (j = 0; j < memArray.length; j++) {

      //check array allWords to see if a word already exists.
      for (k = 0; k < allWords.length; k++) {

        if (memArray[j] == allWords[k]) {

          // if word does not exist in repeatedWords, create an object for it.
          var found = false;

          for (l = 0; l < repeatedWords.length; l++) {
            if (memArray[j] === repeatedWords[l]) {
              found = true;
            }
          }

          if (found == false) {
            repeatedWords.push(memArray[j]);
          }
          break;
        }
      }

      if (memArray[j].length > 3) {
        allWords.push(memArray[j]);
      }


        $('.item' + i).append(' <span class="' + memArray[j] + '"> ' + memArray[j] + '</span>');

        }

        $('.projMems').append(' </div>');
      } //end memories.length loop

      for (m = 0; m < repeatedWords.length; m++) {
        $('.' + repeatedWords[m]).addClass('eaten');
        $('.' + repeatedWords[m]).first().css(
          {"background-color": "white" }
        );
      }

    console.log(repeatedWords);

    allWords = [];
    repeatedWords = [];
  } //end reDraw()
});
