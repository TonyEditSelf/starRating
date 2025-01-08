document.addEventListener('DOMContentLoaded', ()=> {

    const qualitiesRated = ['Food', 'Cleanliness', 'Friendliness', 'Service'];
    
    const wrapBox = document.querySelector('.wrapBox');
    const numberofStars = 5;

    const inner = document.createElement('div');
    inner.classList.add('inner');
    wrapBox.appendChild(inner);

    qualitiesRated.forEach(item => {
        const h2 = document.createElement('h2');
        h2.innerHTML = item;
        inner.appendChild(h2);
        makeStar(item);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    inner.appendChild(submitButton);

    function makeStar(item) {

        for (let i=0; i<numberofStars; i++){
            const span = document.createElement('span');
            span.classList.add('fa-regular', 'fa-star', `${item}`);
            inner.appendChild(span);
        }
        
    }

    const allSpans = document.querySelectorAll('span');
    
    const allFoods = document.querySelectorAll('.Food');
    const allCleanliness = document.querySelectorAll('.Cleanliness');
    const allService = document.querySelectorAll('.Service');
    const allFriendliness = document.querySelectorAll('.Friendliness');

    iterateThroughStars(allFoods);
    iterateThroughStars(allCleanliness);
    iterateThroughStars(allService);   
    iterateThroughStars(allFriendliness);

    function iterateThroughStars(qualityElements){

    qualityElements.forEach((spanElement, spanIndex) => {

        spanElement.addEventListener('click', ()=> {

            qualityElements.forEach((s) => {
                s.classList.remove('fa-solid');
                s.classList.add('fa-regular');
            });

            for (let i=0; i<=spanIndex; i++){
                qualityElements[i].classList.remove('fa-regular');
                qualityElements[i].classList.add('fa-solid');
            }
        });

    });

    }
    
});