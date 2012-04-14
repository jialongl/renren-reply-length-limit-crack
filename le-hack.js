// textfields of replies
tfs = document.getElementsByClassName('maxlength');
for (i in tfs) {
    tfs[i].innerHTML = 500;                           // this is the hard limit imposed by *le server.
}
