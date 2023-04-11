import { getStoredCart } from "../Utils/FeakDb"

export const getJobDetailsData = async()=>{
    const JobDetails = await fetch('/jobinfo.json')
    const allJobs = await JobDetails.json()

    const savedCart = getStoredCart();
    const initialCart = [];
    for(const id in savedCart){
        const foundProduct = allJobs.find(product => product.id ===id)
        if(foundProduct){
            const quantity = savedCart[id]
            foundProduct.quantity = quantity
            initialCart.push(foundProduct)
        }
    }
    

    return {allJobs, initialCart}
}