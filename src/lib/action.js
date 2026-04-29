"use server"
import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";
import { redirect } from "next/navigation";

export const createATask = async (formData) => {
    'use server'


    //   const title = formData.get('title')
    //   const  description = formData.get('description')
    //   const status = formData.get('status')
    //   const priority = formData.get('priority')
    //   const assignedTo = formData.get('assignedTo')

    //   const newTask = {title, description, status, priority, assignedTo}

    const newTask = Object.fromEntries(formData.entries());
    const res = await postTask(newTask);
    if(res){
        revalidatePath('/tasks')
    }
    console.log("Adding a new Task", newTask)

    return res;


    // Mutate data
    // Revalidate cache
}

export const newTaskAction = async(formData) => {
    const newTask =  Object.fromEntries(formData.entries());
    
    const res = await postTask(newTask);
    if(res) {
        revalidatePath('/tasks');
        redirect('/tasks')
    }
    console.log(newTask)
}