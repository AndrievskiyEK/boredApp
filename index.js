//Получение данных 
const goActivityBtnNode = document.querySelector(".goBtn");
const activityTextNode = document.getElementById("todoText");
const titleActivityNode = document.getElementById("titleActivity");
const BackGrounBodyNode = document.body.style;


//обработчик событий
goActivityBtnNode.addEventListener('click', function(){
    fetch("http://www.boredapi.com/api/activity/")
        .then(response => {
            if (response.ok){
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(res => {
            const todo = res.activity;
            titleActivityNode.innerText = "Ура, теперь не скучно 🔥";
            BackGrounBodyNode.backgroundColor = "green";
            activityTextNode.innerText = todo;         
    })
})
