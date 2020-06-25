import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyA2mJzjGtJbT1DxFqR0BksPrJkkCxfbL2M',
  authDomain: 'pellatree.firebaseapp.com',
  projectId: 'pellatree'
});
const db = firebase.firestore();


async function getDbProjects() {
  const querySnapshot = await db.collection('projects').get()
  const dbProjects = []

  querySnapshot.forEach(proj => {
    dbProjects.push({ id: proj.id, title: proj.data().title, branch: proj.data().firstBranch })
  })

  return dbProjects
}


async function setDbProjects(title) {

  const branchRef = await db.collection('branches').add({
    title,
    description: "description"
  })

  const projRef = await db.collection('projects').add({
    title,
    firstBranch: branchRef.id
  })

  return { title, projId: projRef.id, branchId: branchRef.id }
}


export { getDbProjects, setDbProjects }