import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore/lite";
import { db } from "./fire.js";

const collectionName = "merch"
const collectionRef = collection(db, collectionName)

async function getTheMerch() {
    const merchCollection = collection(db, collectionName);
    const merchSnapshot = await getDocs(merchCollection)
    console.log("getTheMerch: snapshot is: ", merchSnapshot)
    const merchList = merchSnapshot.docs.map(doc => withKey(doc))
    return merchList   
}

function withKey(doc) {
    let o = doc.data();
    o.key = doc.id;
    return o;
}

async function addMerch(merchItem) {
    await addDoc(collectionRef, merchItem);
}

async function deleteMerchItem(key) {
    const docRef = doc(collectionRef, key);
    deleteDoc(docRef)
}

async function editMerchItem(key, updatedMerchItem) {
    const docRef = doc(collectionRef, key);
    await updateDoc(docRef, updatedMerchItem);
}

export { getTheMerch, addMerch, deleteMerchItem, editMerchItem }