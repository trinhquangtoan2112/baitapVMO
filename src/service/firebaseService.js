import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { message } from "antd";

export const checkBookMark = async (userID) => {
    const subCollection = collection(db, "UserBookMark", `${userID}`, `${userID}`);
    const testq = query(subCollection);
    const querySnapshotq = await getDocs(testq);

    if (querySnapshotq._snapshot.docChanges[0] === undefined) {
        return false
    } else {
        return querySnapshotq._snapshot
    }
}
export const checkDocs = async (userID, acticleID) => {

    const subCollection = doc(db, "UserBookMark", `${userID}`, `${userID}`, `${acticleID}`);
    const data = await getDoc(subCollection)
    if (data._document) {
        return true
    } else {

        return false
    }
}
export const saveBookMark = async (userID, articleID, data) => {
    const testCollection = doc(db, "UserBookMark", `${userID}`, `${userID}`, `${articleID}`);
    await setDoc(testCollection, data).then(() => {
        message.success("Successfully")

        return true;
    }).catch(() => {
        message.error
            ("Error")
        return false;
    })
}

export const deleteBookMark = async (userID, articleID) => {
    try {
        const bookmarkDoc = doc(db, "UserBookMark", `${userID}`, `${userID}`, `${articleID}`);
        await deleteDoc(bookmarkDoc);
        message.success("Successfully")

        return true;
    } catch (error) {
        message.error
            ("Error")
        return false;

    }

}