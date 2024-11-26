import { useState } from "react"
// form to create a quest/task
//fields: Name, importance/priority, description, deadline, other info
export default function QuestForm (){

    const [name,setName]=useState('')
    const [type,setType]=useState('')
    const [description,setDescription]=useState('')
    const [deadline,setDeadline]=useState(0)
    const [other, setOther]=useState('')


    const [formErrors, setFormErrors]=useState({
       name:"Quest name is required",
       type:"Quest type is required",
       description:"Quest description is required",
       
    })

    const questHand =(e)=>{
        e.preventDefault();
    }

    const nameHand = (e)=>{
        setName(e.target.value.trim())
    }
    const typeHand = (e)=>{
        setType(e.target.value)
    }
    const descriptionHand = (e)=>{
        setDescription(e.target.value.trim())
    }
    const deadlineHand =(e)=>{
        setDeadline(e.target.value)
    }
    return (
        <>
        <form id="questForm" onSubmit={questHand}>
                <h2 style={{color:"black",fontSize:"300%",margin:"0"}}>New Quest</h2>
                <label htmlFor="questName">Name: </label>
                <input type="text" name="questName" id="questName" value={name} onChange={nameHand}/>
           
                <label htmlFor="questType">Type: </label>
                <select name="questType" id="questType" onSelect={typeHand}>
                    <option value="" >--Please Select Quest Type--</option>
                    <option value="main">Main Quest</option>
                    <option value="side">Side Quest</option>
                    <option value="daily">Daily Quest</option>
                </select>
                <label htmlFor="questDes">Description: </label>
                <input type="text" name="questDes" id="questDes" value={description} onChange={descriptionHand} />
                <label htmlFor="deadline">Deadline: </label>
                <input style={{textAlign:"center", width:"50%",margin:"auto"}} type="date" name="deadline" id="deadline" value={deadline} onChange={deadlineHand} />
                <label htmlFor="other">Extra Info: </label>
                <input type="text" name="other" id="other"/>
        <button>Start Quest</button>
        </form>
        </>
            
            
            
            
            
        
    )

}