import axios from "axios"


const _axios = async ({method, url, data, onSuccess, onError}) => {
    try{
        const response = await axios({method,url,data})
        onSuccess(response)
    } catch(error) {
        onError(errror)
    }
}

export { _axios }