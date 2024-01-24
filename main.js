let tabHeads = document.querySelectorAll('.tabHead div');
let tabContents = document.querySelectorAll('.tabContent div');

tabHeads.forEach((tabHead, index) => {
    tabHead.addEventListener('click', () => {
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('active');
        });

        tabHeads.forEach((tabHead)=>{
            tabHead.classList.remove('tHactive');
        })
        tabHeads[index].classList.add('tHactive');
        tabContents[index].classList.add('active');
    });
});
