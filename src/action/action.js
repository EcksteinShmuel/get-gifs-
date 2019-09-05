
export function fetchingApi(input, searching, signal, controller)  {
    console.log('controller',controller);
    
    if(searching === true){
      console.log('aborted');
      
        controller.abort();
    }
    return async (dispatch) => {
        let controller = new AbortController();
        let signal = controller.signal
        console.log('fetchApi', controller);
        
        const option = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          signal: signal
        }

        fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=mjKbMNiZDyNCse5jt8uolU27N7Kzzxhg&limit=30`, option)
        .then(function(response){
          return response.json();
        }).then(function(myJson){         
          if(myJson.data.length > 0) {
                let urlArray = [];
                for(let i = 0; i<myJson.data.length; i++) {
                    urlArray.push(myJson.data[i].images.original.url)
                }               
                return dispatch({
                    type: "ADD_URL_LIST",
                    payload: urlArray,
                    searching: false
                })
            }
        }).catch(error => console.error('Error:', error));
    }
} 

export function changeingInput(newInput) {
  return {
    type: "CHANGE_INPUT",
    payload: newInput
  }
}


export function changeSearchingStatus(condition) {
  return {
    type: "CHANGE_SEARCH_CONDITION",
    payload: condition
  }
}