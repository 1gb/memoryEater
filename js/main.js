//Todo: case insensitive
//Todo: enter key
//Todo: not accept blank entries


$(document).ready(function() {

  var allWords = [];
  var repeatedWords = [];

//on click submit, thank you message

  var memories = [
    'My family and I would go camping every summer. I loved making smores, cooking hot dogs, and fishing together!',
    'My first dogs name was George. My father brought him home as a surprise when I was 4 years old. Ill never forget the look of anger on my mothers face when she saw that dog for the first time.',
    'Telling my mother I was sick, then staying home from school and watching "The Price is Right"',
    'When I was teaching in Japan, all the English teachers in my area would meet up on Fridays for conveyor belt sushi dinner. We would eat so much!',
    'Staying up too late before a test playing video games.',
    'The first Pumpkin Spice Latte of the season every year!',
    'I remember moving out on my own for the first time into my first apartment. I was so happy to be on my own I slept there the first night even though I didnt have any furniture yet!',
    'My coworker made me a cake for my 17th birthday. When I got home I put it in the fridge, but then I had to leave the house to run an errand. When I came back, I found my little brother eating my birthday cake. :()',
    'I think my happiest moment was seeing my baby daugher for the first time.',
    'I remember going on long walks on various trails in various parks in Seattle with my ex. The relationship didnt work out in the end, but I treasure those memories.'
  ];

  //add new memories to array on click
  $('.textInput').focus(function() {
    $(this).val('');
  });

  $(document).keypress(function(e) {
      if(e.which == 13) {
        event.preventDefault();
        btnClick();
      }
  });

  $('.submitButton').click(function() {
    btnClick();
  });

  function btnClick() {
    memories.unshift( $('.textInput').val() );
    $('.textInput').val('tell me.');
    reDraw();
  }

// ---------------

  function reDraw() {
  $('.projMems').empty();

  for (i = 0; i < memories.length; i++) {

    //assigns class item and item# to each memory
    var btemp = '<div class="item item' + i + '">';

    $('.projMems').append(btemp);
    var memArray = memories[i].split(' ');

    //a loop to remove all punctuation

    //individual words in memories, memArray[j] is a single word.
    for (j = 0; j < memArray.length; j++) {

      memArray[j] = memArray[j].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'');

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

        var ctemp = ' <span class="word' + memArray[j] + '"> ' + memArray[j] + '</span>';
        $('.item' + i).append(ctemp);

        }

        var dtemp = ' </div>'
        $('.projMems').append(dtemp);
      } //end memories.length loop

      for (m = 0; m < repeatedWords.length; m++) {
        var temp = '.' + 'word' + repeatedWords[m].toString();
        $(temp).addClass('eaten');
        $(temp).first().css(
          {"background-color": "white" }
        );
      } //end for loop

    allWords = [];
    repeatedWords = [];
  } //end reDraw()
}); //end ready
