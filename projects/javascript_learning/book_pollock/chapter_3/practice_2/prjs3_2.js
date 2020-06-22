var myheading = "<h1>This is My Web Page!</h1>";
var linktag = "<a href=\"http://www.webxpertz.net\">Web Site Link</a>";
var sometext = "This text can be affected by ohter statements.";
var begineffect = "<strong>";
var endeffect = "</strong>";
var beginpara = "<p>";
var endpara = "</p>";
document.write(myheading);
document.write(begineffect + sometext + endeffect);
document.write(beginpara + linktag + endpara);
document.write(beginpara + sometext + endpara);


function get_added_text () {
    var textpart1 = "This is ";
    var textpart2 = "fun! ";
    var addedtext = textpart1 + textpart2;
    return addedtext;
}

get_added_text ()

document.write(addedtext);