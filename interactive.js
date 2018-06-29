function hello (){
  alert("Hi, Welcome to the Realm of Positivity:).");
}

function songs (listItem) {
  var songList = ["Best Part - Daniel Caesar ft. H.E.R.", "Best Life - Cardi B ft. Chance the Rapper", "Lost in Japan - Shawn Mendes", "Girls Like You - Maroon 5 ft. Cardi B", "Perfectly Wrong - Shawn Mendes", "Mrs. Potato Head - Melanie Martinez", "Yes Indeed - Drake ft. Lil Baby", "One plus One - Beyonce", "King's Dead - Jay Rock, Kendrick Lamar, Future, James Blake", "Somethin Tells me - Bryson Tiller", "Ocean - Tk Kravitz ft. Jacquees", "Wicked Games - The Weeknd"]
  var i = Math.floor(Math.random() * songList.length);
  var x = document.getElementById(listItem);
  x.innerHTML = songList[i];
}
