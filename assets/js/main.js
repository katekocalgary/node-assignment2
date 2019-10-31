
const green = 'rgba(118,174, 170, 0.7)'
const greenG = 'rgba(212, 227, 227, 0.4)), url("./img/city.jpg") no-repeat left bottom'
const black = 'rgba(23,35, 50, 1)'
const blackG = 'rgba(14, 32, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const brownG = 'rgba(230, 207, 189, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const greenblueG = 'rgba(208, 224, 230, 1)'
const pink = 'rgba(254,156, 161, 0.8)'
const pinkG = 'rgba(240, 222, 223, 0.2)), url("./img/molain.jpg") no-repeat left top'
const blue = 'rgba(98,189, 254, 0.8)'
const blueG = 'rgba(225, 242, 250, 0.4)), url("./img/picme2.jpg") no-repeat left top'

const data = [
    {
        topic: 'Product',
        title: 'Calgary Crime Dash Board',
        button: 'move',
        link : 'product',
        color: [green, greenG]
    },
    {
        topic: 'Work Experience',
        title: '10 years, worked in the mobile and web industry',
        button: 'more detail',
        link : 'resume',
        color: [black, blackG]
    },
    {
        topic: 'Education',
        title: 'Masters Degree in Science Communication',
        button: 'more education',
        link : 'resume',
        color: [brown, brownG]
    },
    {
        topic: 'Certification',
        title: 'Project Management Professional',
        button: 'more certification',
        link : 'resume',
        color: [greenblue, greenblueG]
    },
    {
        topic: 'Gallery',
        title: 'What a joyful life ',
        button: 'more pictures',
        link : 'gallery',
        color: [pink, pinkG]
    },
    {
        topic: 'Technical skills',
        title: 'Full stack Developer',
        button: 'more skills',
        link : 'resume',
        color: [blue, blueG]
    }
]


// Tile create
function makeTile(colorV,tileV){
    const cardRow = document.querySelector(".card-row");
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");
    cardDiv.setAttribute("id",tileV);
    cardDiv.style = "background: linear-gradient(to bottom, " + colorV[0] + "," + colorV[1];
    cardRow.appendChild(cardDiv);
    return cardDiv;
}


// Topic create
function makeTopic(topicV){
    const cardWrap = document.querySelector(".card");
    const topicDiv = document.createElement("div");
    topicDiv.setAttribute("class", "topic");
    topicDiv.innerText = topicV;
    cardWrap.appendChild(topicDiv);
    return topicDiv
}



// Title create
function makeTitle(titleV){
    const cardWrap = document.querySelector(".card");
    const titleDiv = document.createElement("div");
    titleDiv.setAttribute("class","title");
    titleDiv.innerText = titleV;
    cardWrap.appendChild(titleDiv);
    return titleDiv
}

// Button create
function makeButton(buttonV){
    const cardWrap = document.querySelector(".card");
    const buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class","buy-button");
    buttonDiv.innerText = buttonV;
    cardWrap.appendChild(buttonDiv);
    return buttonDiv;
}

// Repeat tile & Data insert to each function

for(let i=0; i < data.length ; i++) {
    function createCard(){
        // Backgroundcolor & Id
        const colorV = data[i].color;
        const tileV = "card" + i;
        const cardDiv = makeTile(colorV,tileV);

        // Topic
        const topicV = data[i].topic;
        const topic = makeTopic(topicV);
        // Title
        const titleV = data[i].title;
        const title = makeTitle(titleV);
        // Button
        const buttonV = data[i].button;
        const button = makeButton(buttonV)

        // Define location
        cardDiv.appendChild(topic);
        cardDiv.appendChild(title);
        cardDiv.appendChild(button);

        return cardDiv;
    }

    const cardRow = document.querySelector(".card-row");
    cardRow.appendChild(createCard());
}




