// ------------
// #1
document.getElementById ("submit-click").addEventListener ( 'click' , function (){
    // #2
const commntbox = document.getElementById ('commentN');
// const usercomment =  commntbox.value;
// #3
const newComment = document.createElement (' p ');
newComment.innerText= commntbox.value ;
// #4
const divdo = document.getElementById(' div-do ');
divdo.appendchild ('newComment')
// #5
commntbox.value = ' ';

} )



/* --------------Parlam-nah/*  */