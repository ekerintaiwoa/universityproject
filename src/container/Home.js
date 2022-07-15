   
import  React , { Component } from "react";
import { bindActionCreators } from "redux";
import {connect} from 'react-redux' ;
import { showAllCourses } from "../actions";
import viewAllCourses from './../component/Home/viewallCourse';


   class Home extends Component {
    constructor(props) {
        super(props);
     }

      componentDidMount()  {
          // add all the  props here
         this.props.showAllCourses() ;

         // add seconmd props  this.props.



      }



     
       render() { 
           return (  

                      <h1> hi</h1>
                   // <viewAllCourses listofCourses={this.props.allcourses} />


           );
       }
   }


      // recieves the updated state
   function mapStateToProps(state){

         console.log(state) ;
        
         // we are recieveing state from the courses reducer, the new prop is all courses
         return{
                   
            allcourses : state.courses


         }
          



   }

      // dispatch the action

    //  function  mapDispatchToProps(dispatch){

      //  return bindActionCreators({ }, dispatch) ;

    // }
    
     //export default connect(mapStateToProps,mapDispatchToProps) (Home);
   export default connect(mapStateToProps,showAllCourses) (Home);