let suggestions  = [
    'AsusVivobookGo14flip',
    'HPVictus16',
    'HPProBook450G9',
    'HPNotebook240G8',
    'HPOmen16',
    'HPpavilion14',
    'AsusZenbook14Flip',
    'AsusROGStrix17',
    'rogzephyruss15',
    'AsusVivobookX',
    'delllatitude3340',
    'dellxps13',
    'dellg15',
    'dellxps9530',
    'MSIBravo9S7',
    'MSICrosshair15',
    'MSIKatanaGF66',
    'MSIKatanaGF76',
];

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");

inputBox.onkeyup = (e)=>{
    let userData = e.target.value; 
    let emptyArray = [];
    if(userData){

        icon.onclick = ()=>{
            linkTag.setAttribute("href");
            linkTag.click();
        }

        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });

        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;

        });

        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
        
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
