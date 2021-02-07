function menuOrder() {
    const menu = document.getElementById('search-meal-field').value;
    console.log(menu);
    mealName(menu);
    document.getElementById('search-meal-field').value = "";
}

function mealName(mealName) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            const showMeal = document.getElementById('display-meal');

            for (let i = 0; i < data.meals.length; i++) {
                const menuItem = data.meals[i];
                console.log(menuItem);
                console.log(menuItem.strMeal);
                console.log(menuItem.idMeal);

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
    console.log('ID : ', id);

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            const displayDetails = document.getElementById('display-details-info');
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

function IngredientsList(item){
    for(i=1;i<=20;i++){
        console.log(item);
        element = `${item + i}`;
        console.log(element);
        console.log("test");
    }
}


