function menuOrder() {
    const menu = document.getElementById('search-meal-field').value;
    // console.log(menu);
    mealName(menu);
    document.getElementById('search-meal-field').value = "";
}

function mealName(mealName) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);

            const showMeal = document.getElementById('display-meal');

            for (let i = 0; i < data.meals.length; i++) {
                const menuItem = data.meals[i];
                // console.log(menuItem);
                // console.log(menuItem.strMeal);
                // console.log(menuItem.idMeal);

                const mealItem = document.createElement('div');
                mealItem.className = 'col';

                const menuInfo = `
                    <div id="${menuItem.idMeal}" onclick = 'MealDetails("${menuItem.idMeal}")' class="card" style="width: 18rem;">
                        <img src="${menuItem.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${menuItem.strMeal}</p>
                        </div>
                    </div>
                `;

                mealItem.innerHTML = menuInfo;
                showMeal.appendChild(mealItem);



                // MealDetails(menuItem.idMeal);

            }


        })


}

function MealDetails(id) {
    document.getElementById('display-details').style.display = "block";
    document.getElementById("display-meal").style.opacity = "0.5";

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const displayDetails = document.getElementById('display-details-info');

            document.getElementById('show-img').src = data.meals[0].strMealThumb;

            document.getElementById('food-area').innerText = data.meals[0].strArea;

            document.getElementById('making-process').innerText = data.meals[0].strInstructions;

            // document.getElementById('li-ingredient-1').innerHTML = data['meals']['0'][`strMeasure${1}`] +' '+ data['meals']['0'][`strIngredient${1}`];

            // document.getElementById('li-ingredient-2').innerHTML = data['meals']['0'][`strMeasure${2}`] +' '+ data['meals']['0'][`strIngredient${2}`];

            // document.getElementById('li-ingredient-3').innerHTML = data['meals']['0'][`strMeasure${3}`] +' '+ data['meals']['0'][`strIngredient${3}`];

            // document.getElementById('li-ingredient-4').innerHTML = data['meals']['0'][`strMeasure${4}`] +' '+ data['meals']['0'][`strIngredient${4}`];

            // document.getElementById('li-ingredient-5').innerHTML = data['meals']['0'][`strMeasure${5}`] +' '+ data['meals']['0'][`strIngredient${5}`];
            ingredient(1);
            ingredient(2);
            ingredient(3);
            ingredient(4);
            ingredient(5);
            ingredient(6);

            function ingredient(id){
                document.getElementById(`li-ingredient-${id}`).innerHTML = data['meals']['0'][`strMeasure${id}`] +' '+ data['meals']['0'][`strIngredient${id}`];
            }

            // let count = 0;
            // for (let i = 1; i <= 20; i++) {
            //     if (data['meals']['0'][`strIngredient${i}`] == "") {
            //         break;
            //     }
            //     count++;
            // }
            // console.log(count);

            //*************************************** */

            // const list1 = document.createElement('li');
            // list1.className = 'li';
            // list1.innerHTML = data['meals']['0'][`strMeasure${1}`] +' '+ data['meals']['0'][`strIngredient${1}`];
            // displayDetails.appendChild(list1);

            // const list2 = document.createElement('li');
            // list1.className = 'li';
            // list2.innerHTML = data['meals']['0'][`strMeasure${2}`] +' '+ data['meals']['0'][`strIngredient${2}`];
            // displayDetails.appendChild(list2);

            //*************************************** */

            // document.getElementById('display-details').style.display = "none"; ////////****** */

            // document.getElementsByClassName('li').innerText = "";
            // list1.innerHTML = "";
            // list2.innerHTML = "";
  

            // document.getElementById('ul-container').innerText = data['meals']['0'][`strMeasure${1}`] +' '+ data['meals']['0'][`strIngredient${1}`];
            // document.getElementById('ul-container').innerText = data['meals']['0'][`strMeasure${2}`] +' '+ data['meals']['0'][`strIngredient${2}`];
            // document.getElementById('ul-container').innerText = data['meals']['0'][`strMeasure${3}`] +' '+ data['meals']['0'][`strIngredient${3}`];



            // for(let j=1;j<=count;j++){
            //     const content = data['meals']['0'][`strMeasure${j}`] +' '+ data['meals']['0'][`strIngredient${j}`];
            // }


            // console.log(data.meals[0].strIngredient1);
            // console.log(data['meals']['0'][`strIngredient${1}`]);

            //////////////////////COmment out

            // let count = 0;
            // for(i=1;i<=10;i++){
            //     const content = data['meals']['0'][`strMeasure${i}`] +' '+ data['meals']['0'][`strIngredient${i}`];
            //     console.log(content);
            //     if(data['meals']['0'][`strIngredient${i}`] == ""){
            //         break;
            //     }
            //     count++;
            //     const list1 = document.createElement('li');

            //     list1.innerHTML = content;
            //     displayDetails.appendChild(list1);

            // }

            ////////////////////////////////////////
            // console.log(count);

            // for(i=1;i<=count;i++){

            // }
            // console.log(data.meals[0].strMeasure1 +' '+  data.meals[0].strIngredient1);

            //
            // const displayDetails = document.getElementById('display-details-info');


            // displayDetails.innerText = data.meals[0].strArea;

            //     const displayInfo = `

            //         <div class="mb-3">
            //             <img src="${data.meals[0].strMealThumb}" class="mb-3" alt="...">
            //             <div>
            //                 <h4>${data.meals[0].strMeal}</h4>
            //                 <h5>Ingredients</h5>
            //                 <h6 onclick = "IngredientsList('${data.meals[0].strIngredient1}')">hello</h6>


            //             </div>
            //         </div>
            // `;
            //     displayDetails.innerHTML = displayInfo;




        })


}



 // document.getElementById('li-ingredient-5').innerHTML = data['meals']['0'][`strMeasure${5}`] +' '+ data['meals']['0'][`strIngredient${5}`];

function closeDisplayDetails(){
    document.getElementById('display-details').style.display = "none";
    document.getElementById("display-meal").style.opacity = "1";
    // document.getElementsByTagName('li').innerHTML = "";
  
    
}

// document.getElementById('ul-container').addEventListener('click', (event)=>{
//     if(event.target.tagname === 'BUTTON'){
//         const button = event.target;
//         const li = button.parentNode;
//         const ul = li.parentNode;
//         if(button.textContent === "Close"){
//             ul.removeChild(li);
//         }
//     }
// })

// function IngredientsList(item) {
//     for (i = 1; i <= 20; i++) {
//         console.log(item);
//         element = `${item + i}`;
//         console.log(element);
//         console.log("test");
//     }
// }


