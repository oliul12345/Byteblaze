
const getStoredBlogs = () =>{
    const storedJobApplication = localStorage.getItem('blog-applications');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }
    return[];
}

const saveBlogApplication = id =>{
    const storedBlogApplications = getStoredBlogs();
    const exists = storedBlogApplications.find(jobId => jobId === id);
    if(!exists){
        storedBlogApplications.push(id);
        localStorage.setItem('blog-applications', JSON.stringify(storedBlogApplications));
    }
}

export {getStoredBlogs,saveBlogApplication}