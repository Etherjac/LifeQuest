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
        <form>
        <label htmlFor="questName">Quest Name: </label>
        <input type="text" name="questName" id="questName" value={name} onChange={nameHand}/>
        <label htmlFor="questType">Quest Type: </label>
        <select name="questType" id="questType" onSelect={typeHand}>
            <option value="" selected>--Please Select Quest Type--</option>
            <option value="main">Main Quest</option>
            <option value="side">Side Quest</option>
            <option value="daily">Daily Quest</option>
        </select>
        <label htmlFor="questDes">Quest Description: </label>
        <input type="text" name="questDes" id="questDes" value={description} onChange={descriptionHand} />
        <label htmlFor="deadline">Quest Deadline: </label>
        <input type="date" name="deadline" id="deadline" value={deadline} onChange={deadlineHand} />
        <label htmlFor="other">Quest Notes: </label>
        <input type="text" name="other" id="other"/>
        </form>
        
        </>
    )

}