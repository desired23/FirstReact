import instance from "./instance";

 const getMyData = () => {
    return instance.get(`/info`)
}
export  {getMyData}