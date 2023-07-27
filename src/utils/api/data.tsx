import instance from "./instance";

 const getMyData = () => {
    return instance.get(`/auth/info`)
}
export  {getMyData}