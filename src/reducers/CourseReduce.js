

import { GET_ALL_COURSES } from "../actions";

const CourseReducer = (state = [], action) => {
    

    switch(action.type){

        case  GET_ALL_COURSES:
          
            
        return    [  ...state ,
                     action.payload
        ]
               ;
               
         default :

         return state ;
        


        }







 }
export default CourseReducer;