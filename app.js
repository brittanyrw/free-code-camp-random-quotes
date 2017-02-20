var state = {
  current: 0,
  quotes: [
    {
    text: "I am a Woman Phenomenally. Phenomenal Woman, that's me.",
     speaker: "― Maya Angelou",
    },{
    text: "I raise up my voice—not so I can shout, but so that those without a voice can be heard...we cannot succeed when half of us are held back.",
     speaker: "― Malala Yousafzai",
    },{
    text: "The question isn't who's going to let me, it's who's going to stop me.",
    speaker: "— Ayn Rand",
    },{
    text: "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.",
    speaker: "— Madeleine Albright",
    },{
    text: "A feminist is anyone who recognizes the equality and full humanity of women and men.",
    speaker: "― Gloria Steinem",
    },{
    text: "I am not free while any woman is unfree, even when her shackles are very different from my own",
    speaker: "― Audre Lorde",
    },{
    text: "Well-behaved women seldom make history.",
    speaker: "― Laurel Thatcher Ulrich",
    },{
    text: "Lock up your libraries if you like, but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.",
    speaker: "― Virginia Woolf",
    },{
    text: "A girl should be two things: who and what she wants.",
    speaker: "― Coco Chanel",
    },{
    text: "The older I get, the greater power I seem to have to help the world, I am like a snowball - the further I am rolled the more I gain.",
    speaker: "― Susan B. Anthony",
    },{
    text: "It's not enough to be nice in life. You've got to have nerve.",
    speaker: "― Georgia O'Keeffe",
    },{
    text: "I am my own experiment. I am my own work of art.",
    speaker: "― Madonna",
    }
  ],
};

var randomNumber = Math.floor(Math.random() * (state.quotes.length) + 0);


function displayRandomQuotes(){
  for (var i = 0; i < state.quotes.length; i++){
    $('.quote').text(state.quotes[randomNumber].text);
    $('.speaker').text(state.quotes[randomNumber].speaker);
  }
  randomNumber = Math.floor(Math.random() * (state.quotes.length) + 0);
}

$(document).ready(function(event) { 
  $('.quote').text(state.quotes[0].text);
  $('.speaker').text(state.quotes[0].speaker);

  $('.quote-search').click(function(event){
    event.preventDefault();
    displayRandomQuotes();
  });

  $('.twitter-share-button').click(function(event){
    $('.twitter-share-button').attr("href", 'https://twitter.com/intent/tweet?text=' + $('.quote').text() + $('.speaker').text());
  });
 
});