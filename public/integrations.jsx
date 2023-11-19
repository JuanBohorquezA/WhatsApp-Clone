import config from '../config/config';
import Config from '../config/config';

export const  login = async(phoneNumber)=> {
        const url = "http://localhost:7269/api/Login";
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", Config.IdentificadorLogin);
        
        var raw = JSON.stringify({
            "PhoneNumber": phoneNumber
        });
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        try {
            const response = await fetch(url, requestOptions);
            const result = await response.text();
            return JSON.parse(result) // Maneja la respuesta aquí
        }
        catch (error) {
            return ('Error:',error) // Maneja el error aquí
        }
    }
export const getDataUser = async()=> {
    const url = `http://localhost:7269/api/getUserData?PhoneNumber=${Config.PhoneNumber}`;	
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", Config.JWT);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
    try{
        const response = await fetch(url, requestOptions);
        const result = await response.text();
        return JSON.parse(result) // Maneja la respuesta aquí
    }
    catch (error) {
        return ('Error:',error) // Maneja el error
    }
}
export const getUsersList = async()=>{
    const url = `http://localhost:7269/api/availableUsers?PhoneNumber=${config.PhoneNumber}`
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", Config.JWT);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
    try{
        const response = await fetch(url, requestOptions);
        const result = await response.text();
        return JSON.parse(result) // Maneja la respuesta aquí
    }
    catch (error) {
        return ('Error:',error) // Maneja el error
    }
}

export const getConversations = async()=>{
    const url = `http://localhost:7269/api/getConversations?PhoneNumber=${config.PhoneNumber}`
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", Config.JWT);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
    try{
        const response = await fetch(url, requestOptions);
        const result = await response.text();
        return JSON.parse(result) // Maneja la respuesta aquí
    }
    catch (error) {
        return ('Error:',error) // Maneja el error
    }
}

    

