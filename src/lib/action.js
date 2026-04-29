
 
export const createATask = async(formData)=> {
  'use server'

 
  const title = formData.get('name')
  const email = formData.get('email')
  console.log(title, email)
 
  // Mutate data
  // Revalidate cache
}