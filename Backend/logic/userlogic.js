//Database Logic Here
const getallusers=async ()=>{
    return await Client.find()
    }
export {getallusers}