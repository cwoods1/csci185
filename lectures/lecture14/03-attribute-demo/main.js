
const catImage =  "https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg";
const dogImage =  "https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg";
const birdImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg";
const fishImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3H7Yb30u3WF_hq9nJR5qV8kecf0mUhJoDnA&usqp=CAU";



function showCat() {
    document.querySelector("#image-demo").src = "https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg";
};

function showDog() {
    document.querySelector("#image-demo").src = dogImage;
};

function showBird() {
    document.querySelector("#image-demo").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg";
};

function showFish() {
    document.querySelector("#image-demo").src = fishImage;
};

