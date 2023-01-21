import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";
import {v4 as createId} from "uuid";

export async function getAll() {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, "images");
    const photoList = await listAll(imagesFolder);

    for(let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        })
    }

    return list;
}

export async function insert(file: File) {
    if(["image/jpeg", "image/jpg", "image/png", "image/svg"].includes(file.type)) {
        let ramdomName = createId();
        let newFile = ref(storage, `images/${ramdomName}`);
        
        let upload = await uploadBytes(newFile, file);
        let photoUrl = await getDownloadURL(upload.ref);
        
        return { name: upload.ref.name, url: photoUrl } as Photo;
    }else{
        return new Error("Tipo de arquivo não permitido");
    }
}

export async function deletePhoto(name: string) {
    let photoRef = ref(storage, `images/${name}`);

    await deleteObject(photoRef);
}