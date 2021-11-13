import axios from "axios"

const url = axios.createIndex({
    baseUrl: "http://localhost:4000"
})

export const getNothing = () => {
    const data = url.get("/").then((value) => console.log(value.data))
    return data 
}
