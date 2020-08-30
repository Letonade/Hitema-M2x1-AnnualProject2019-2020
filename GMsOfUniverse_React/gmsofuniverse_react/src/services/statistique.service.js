const apiUrl = "http://127.0.0.1:8000";

class StatistiqueService {
    
        //Stat how user more or less at the same time the last week/day ? 
        static async statone (body) {
            //let stat = (((datelast.localStorage(users)) - ((new Date().localStorage(users))))/100);
            
            let init = {
                method : "POST",
                headers : {
                    //'Authorization': 'Bearer ' + localStorage.getItem("TokenUser"),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            }
            let call = await fetch(`${apiUrl}/____`, init)
            return call;
        
        }
        
        // Stat how game more or less at the same time the last day
        static async stattwo (body) {
          //let stat =(((datelast.localStorage.getItem(game)) - ((new Date().localStorage.getItem(game))))/100);
              let init = {
                method : "POST",
                headers : {
                   'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            }
            let call = await fetch(`${apiUrl}/get_game`, init)
            return call;
        }
            
            

        // count all the game since the first one
        static async statthree (body) { 
           //let stat =  (localStorage.getItem(game.all));
             let init = {
                method : "POST",
                headers : {
                    //'Authorization': 'Bearer ' + localStorage.getItem("TokenUser"),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            }
            let call = await fetch(`${apiUrl}/____`, init)
            return call;
            
        }

}

export default(StatistiqueService)