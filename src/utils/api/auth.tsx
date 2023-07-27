
import { IRegistrationData } from "../../interfaces/user"
import instance from "./instance"

const signin = (data: IRegistrationData) => {
    return instance.post('/auth/signin',data)
}
const signup = (data: IRegistrationData) => {
    return instance.post('/auth/signup',data)
}
// const getOneCategory = (_id:string) => {
//     return instance.get(`categories/${_id}`)
// }
// const addCategory = (category: ICategory) => {
//     return instance.post(`categories`, category)
// }
// const delCategory = (_id:string) => {
//     return instance.delete(`categories/${_id}`)
// }
// const editCategory = (category: ICategory) => {
//     return instance.patch(`categories/${category._id}`, category)
// }
export {signup, signin}