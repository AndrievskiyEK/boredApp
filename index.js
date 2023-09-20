//Получение данных 
const goActivityBtnNode = document.querySelector(".goBtn");
const activityTextNode = document.getElementById("todoText");
const titleActivityNode = document.getElementById("titleActivity");
const BackGrounBodyNode = document.body.style;


//обработчик событий
goActivityBtnNode.addEventListener('click', function(){
    fetch("https://www.boredapi.com/api/activity/")
        .then(response => {
            if (response.ok){
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(res => {
            const todo = res.activity;
            titleActivityNode.innerText = "Ура, теперь не скучно 🔥";
            BackGrounBodyNode.background = 
            "linear-gradient(180deg, rgba(0, 176, 28, 0.2) 24.48%, rgba(255, 255, 255, 0) 100%)";
            activityTextNode.innerText = todo;         
    })
})
