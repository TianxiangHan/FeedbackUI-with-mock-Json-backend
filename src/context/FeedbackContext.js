import { createContext,useState,useEffect} from "react";
const FeedbackContext=createContext();

export const FeedbackProvider=({children})=>{
//    define global feedback varible
    const [feedback,setFeedback]=useState([ ]);
    const [editFeedback,setEditFeedback]=useState([
        {
            item:{},
            edit:false
        }
    ]);
    const [isLoading,setIsLoading]=useState(true);
    //fetching data from db.json on loading
    useEffect(()=>{
        FetchFeedback();
    },[]);
    //fetch data function  from db.json
   async function FetchFeedback(){
       //return the sorted data with id in descendent order
       //http://localhost:5000/feedback?_sort=id&_order=desc if no proxy was added in package.json
       const response=await fetch("/feedback?_sort=id&_order=desc");
       const data =await response.json();
       setFeedback(data);
       setIsLoading(false);
   } 
    // define HandleDelete in feedback item
    //keep the UI delete, just to save time on fetching the data again
   async function HandleDeleteInApp(id){
        if(window.confirm("are you sure to delete")){
       await fetch(`/feedback/${id}`, { method: 'DELETE' })
          setFeedback(feedback.filter((eachFeedBack)=>eachFeedBack.id!=id));
        }
      }
      // define Handle feedback add in 
   async function HandleFeedbackAdd(feedbackObject) {
       const response= await fetch("/feedback",{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body: JSON.stringify(feedbackObject)
       });
            const data = await response.json();
            setFeedback([data,...feedback]);
      }
      //edit the feedback item 
    function editFeedbackFunction(toBeEditedItem){
          setEditFeedback({
              item:toBeEditedItem,
              edit:true
          })
    } 
    //updating the db.json 
    async function UpdateFeedback(id,tobeUpdatedFeedbackItem){
        const response= await fetch(`feedback/${id}`,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(tobeUpdatedFeedbackItem) 
        });
        const data= await response.json();
        setFeedback(feedback.map((eachFeedBack)=>(
            // the spread operator below is the merge of two objects,
            //if the value of the object atrribute is the same
            // will only return the latter object attribute,
            // in this case, will be later 
            eachFeedBack.id===id?{...eachFeedBack,...data}:eachFeedBack
        )));
    }
   return(
         <FeedbackContext.Provider
         value={{
            feedback:feedback,
            isLoading,
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