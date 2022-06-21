import productos from "../Data/Data.js"

const pedirDatos =() =>{
        return new Promise((resolve,reject) =>{
            setTimeout(()=>{
            resolve(productos)
            }, 1000)
        })

}

export default pedirDatos