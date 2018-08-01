const carouselInner = document.querySelector(".carousel-inner");

var request = new XMLHttpRequest();

request.open('GET', 'https://api.myjson.com/bins/17ocpi', true);

request.onload = function () {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {

        for (var key in data) {
            
            const carouselItem = document.createElement('div');
            carouselItem.setAttribute('class', 'carousel-item');
            carouselInner.appendChild(carouselItem);
            carouselInner.firstElementChild.setAttribute('class', 'carousel-item active');

            const carouselCaption = document.createElement('div');
            carouselCaption.setAttribute('class', 'carousel-caption d-none d-md-block');
          
            const title = document.createElement('h2');
            title.textContent = data[key].title;

            const text = document.createElement('p');
            text.textContent = data[key].text;

            const image = document.createElement('img');
            image.setAttribute('src', data[key].image);
            image.setAttribute('class', 'd-block w-130 img-fluid');
            image.setAttribute('alt', 'Responsive image');

            
            carouselItem.appendChild(carouselCaption);
            carouselCaption.appendChild(title);
            carouselCaption.appendChild(text);
            carouselItem.appendChild(image);

        }
    } else {
        console.log('error');
    }
}

request.send();