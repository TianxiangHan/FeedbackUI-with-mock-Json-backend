import { createContext,useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext=createContext();

export const FeedbackProvider=({children})=>{
//    define global feedback varible
    const [feedback,setFeedback]=useState([
        {
            id:1,
            text:"this item 1 is from context",
            rating:10
        },
        {
            id:2,
            text:"this item 2 is from context",
            rating:7
        },
        {
            id:3,
            text:"this item 3 is from context",
            rating:9
        }
    ]);
    const [editFeedback,setEditFeedback]=useState([
        {
            item:{},
            edit:false
        }
    ])
    // define HandleDelete in feedback item
    function HandleDeleteInApp(id){
        if(window.confirm("are you sure to delete")){
          setFeedback(feedback.filter((eachFeedBack)=>eachFeedBack.id!=id));
        }
      }
      // define Handle feedback add in 
    function HandleFeedbackAdd(feedbackObject) {
        feedbackObject.id=uuidv4();
            setFeedback([...feedback,feedbackObject]);
      }
      //edit the feedback item 
    function editFeedbackFunction(toBeEditedItem){
          setEditFeedback({
              item:toBeEditedItem,
              edit:true
          })
    } 
    function UpdateFeedback(id,tobeUpdatedFeedbackItem){
        setFeedback(feedback.map((eachFeedBack)=>(
            // the spread operator below is the merge of two objects,
            //if the value of the object atrribute is the same
            // will only return the latter object attribute,
            // in this case, will be tobeUpdatedFeedbackItem 
            eachFeedBack.id===id?{...eachFeedBack,...tobeUpdatedFeedbackItem}:eachFeedBack
        )));
    }
   return(
         <FeedbackContext.Provider
         value={{
            feedback:feedback,
            HandleDelete:HandleDeleteInApp,
            HandleFeedbackAdd:HandleFeedbackAdd,
            editFeedbackFunction:editFeedbackFunction,
            editFeedback,
            UpdateFeedback

         }}>
             {children}
         </FeedbackContext.Provider>
   );
}
export default FeedbackContext;