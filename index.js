document.addEventListener("DOMContentLoaded", function() {
    const prelims = document.getElementById('prelims');
    const midterms = document.getElementById('midterms');
    const finals = document.getElementById('finals');

    const SubmitBtn = document.getElementById('SubmitBtn');

    const pre = document.getElementById('pre');
    const mid = document.getElementById('mid');
    const fin = document.getElementById('fin');

    SubmitBtn.addEventListener('click', function() {
        if (prelims.checked) {
            showDiv(pre);
        }

        if (midterms.checked) {
            showDiv(mid);
        }

        if (finals.checked) {
            showDiv(fin);
        }
    });

    function showDiv(divToShow) {
        pre.style.display = 'none';
        mid.style.display = 'none';
        fin.style.display = 'none';

        divToShow.style.display = 'block';
    }
});