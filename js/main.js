// Select DOM Items
const seeMore = document.querySelector('.seeMore');
const more = document.querySelector('.more');
const seeLess = document.querySelector('.seeLess');
const scroller = document.querySelector('.addSideScroll');

// Set initial state of see more
let showMore = false;
let showMoreMenu = false;

// Add eventListener
seeMore.addEventListener('click', expandSeeMore);
seeLess.addEventListener('click', expandSeeMore);

// the function that expands seeMore
function expandSeeMore() {
    if(!showMore) {
        seeMore.classList.add('hidden');
        more.classList.remove('hidden');
        scroller.classList = "fixed flex-col hidden h-screen px-0 px-2 py-4 overflow-y-auto text-sm bg-gray-100 md:flex lg:pr-48 md:w-3/8 lg:w-1/3";

        // set state of showMore
        showMore = true;
    } else {
        seeMore.classList.remove('hidden');
        more.classList.add('hidden');
        seeMore.classList.add('seeMore');
        
        // set new state of showMore
        showMore = false;
    }
}
