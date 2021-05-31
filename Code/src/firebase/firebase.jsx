import app from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAVTO33gPkwBPeLcVs0pVG4B_A0nC_Vi5c",
    authDomain: "melbeautycenter-69bd1.firebaseapp.com",
    projectId: "melbeautycenter-69bd1",
    storageBucket: "melbeautycenter-69bd1.appspot.com",
    messagingSenderId: "40693059934",
    appId: "1:40693059934:web:28910b5d688ea8a45fbfcf",
    measurementId: "G-9G2G6C0PNE",
};

class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(config);
        }

        this.db = app.firestore();
    }

    doPushNewMessage = async (uuid, data) => {
        const res = await this.db
            .collection("customers")
            .doc(`${uuid}`)
            .set(data);
    };

    doGetInfoFromDb = async (setFunction) => {
        const snapshot = await this.db.collection("customers").get();
        setFunction(snapshot.docs.map((doc) => doc.data()));
    };

    doRemoveComment = async (uuid) => {
        const res = await this.db
            .collection("customers")
            .doc(`${uuid}`)
            .delete();
    };
}

export default Firebase;
