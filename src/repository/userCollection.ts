import db from '@/config/firebaseConfig';
import { UserModel } from '@/entities/user';
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';

class UserRepository {
  private usersCollection = collection(db, 'USERS');
  async fetchUserData() {
    try {
      const snapshot = await getDocs(this.usersCollection);
      const response: UserModel[] = snapshot.docs.map((doc) => doc.data() as UserModel);
      return response;
    } catch (error) {
      return error;
    }
  }

  async createUsers(payload: UserModel) {
    try {
      await addDoc(this.usersCollection, payload);
      return payload;
    } catch (error) {
      return error;
    }
  }

  async updateUsers(id: string, payload: UserModel) {
    try {
      const userRef = doc(db, 'USERS', id);
      await setDoc(userRef, payload, { merge: true });
      return payload;
    } catch (error) {
      return error;
    }
  }
}

export default new UserRepository();
