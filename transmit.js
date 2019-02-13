$(document).ready(function()
{
    $('a').click(function(){
        $('body').fadeOut();
        setTimeout("nav('"+this.href+"')",1000);
        return false;
    });
});
function nav(href){
    location.href=href;
};