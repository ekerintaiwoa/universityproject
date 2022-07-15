import axios from 'axios'
const baseUrl = "http://localhost:9097"

export const GET_ALL_COURSES  = "GET_COURSES" ; 



export function showAllCourses(){

 
   
   const allCourses = fetch(`http://localhost:9097/courses`,
   { method: 'GET'})
   .then(
       res => //res.json() ;
       console.log(res)
   )


   return  {   type :  GET_ALL_COURSES ,
    payload : allCourses
 
   }


}
