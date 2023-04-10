export const getJobDetailsData = async()=>{
    const JobDetails = await fetch('jobinfo.json')
    const jobs = await JobDetails.json()
    

    return jobs
}