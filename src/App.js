

import { db } from './FirebaseConfig';
import { ref, onValue } from "firebase/database";

function App() {
  const dbRef = ref(db, 'user')
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
  return (
    <div>lool</div>
  );
}

export default App;
