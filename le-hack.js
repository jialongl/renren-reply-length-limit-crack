// textfields of replies
tfs = document.getElementsByClassName('maxlength');

// Called once on load. Called again when "Home" is clicked.
function crackLengthLimit () {
    for (i in tfs) {
        tfs[i].innerHTML = 500;
    }
}

spans = document.getElementsByTagName('span')
homeButtonAnchor = null;
for ( i=0; i<spans.length; i++ ) {
    if (spans[i].attributes['stats'] != null &&
        spans[i].attributes['stats'].textContent == 'V6Hd_home')
        homeButtonAnchor = spans[i];
}


homeButtonAnchor.onclick = function() {
    setTimeout('crackLengthLimit()', 3000);
}

crackLengthLimit();
