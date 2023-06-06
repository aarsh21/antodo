import { ID,storage } from '@/appwrite';

const uploadImage = async(file:File) =>{
    if(!file) return

    const fileUploaded = await storage.createFile(
        "647494751bf8e400df9a",
        ID.unique(),
        file
    );
    return fileUploaded;
}
export default uploadImage