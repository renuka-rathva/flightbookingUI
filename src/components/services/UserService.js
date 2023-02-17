import axios from "axios";
const USER_API_BASE_URL = "http://localhost:8080/api/v1/flightreservation";
class UserService {
    saveUser(user){
        return axios.post(USER_API_BASE_URL+'/signup',user)
    }
    logUser(user){
        return axios.post(USER_API_BASE_URL+`/login?username=${user.email}&password=${user.password}`)
    }
    flightSearch(flights){
        return axios.get(USER_API_BASE_URL+`/findflights?arrivalCity=${flights?.arrivalCity}&departureCity=${flights?.departureCity}&departureDate=${flights?.departureDate}`)
    }
    bookingLine(booking){
        return axios.post(USER_API_BASE_URL+`/bookflight`,booking)
    }
}   

export default new UserService(); 
