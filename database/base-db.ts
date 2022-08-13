import { FirebaseOptions, initializeApp } from 'firebase/app'
import {
  getFirestore,
  getDoc,
  getDocs,
  collection,
  doc,
  query,
  Firestore,
} from '@firebase/firestore/lite'

import firebaseConfig from './firebase_config'

export default abstract class BaseDB {
  private db: Firestore

  constructor() {
    this.initializeDB()
  }

  protected async getDocumentById<T>(
    collection: string,
    id: string
  ): Promise<{ id: string; data: T }> {
    this.checkDBState()

    const docRef = doc(this.db, collection, id)
    const snapshot = await getDoc(docRef)

    return { id: snapshot.id, data: snapshot.data() as T }
  }

  protected async getCollectionByName<T>(
    collectionName: string
  ): Promise<{ id: string; data: T }[]> {
    this.checkDBState()

    const q = query(collection(this.db, collectionName))
    const snapshot = await getDocs(q)

    return snapshot.docs.map((doc) => {
      return { id: doc.id, data: doc.data() as T }
    })
  }

  private checkDBState(): void {
    if (!this.db) {
      throw new Error('Database has not been initialized.')
    }
  }

  private initializeDB(): void {
    const app = initializeApp(firebaseConfig as FirebaseOptions)
    this.db = getFirestore(app)
  }
}
