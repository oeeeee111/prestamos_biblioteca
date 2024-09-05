import { libros } from "$lib/database/data.js";
import { db } from "$lib/database/client.js";


const load = async ()=>{

    const regLibros = await db.select().from(libros);
    
    console.log(regLibros)

    return(regLibros);
    
}