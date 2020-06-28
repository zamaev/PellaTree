import { db } from './firebase'

async function getDbProjects() {
  const querySnapshot = await db.collection('projects').orderBy('time').get()
  const dbProjects = []

  querySnapshot.forEach(proj => {
    dbProjects.push({ id: proj.id, title: proj.data().title, branch: proj.data().firstBranch, countBranch: proj.data().countBranch })
  })

  return dbProjects
}


async function setDbProject(title) {

  const branchRef = await db.collection('branches').add({
    title,
    time: new Date().getTime(),
    description: "description"
  })

  const projRef = await db.collection('projects').add({
    title,
    time: new Date().getTime(),
    firstBranch: branchRef.id,
    countBranch: 1
  })

  return { title, projId: projRef.id, branchId: branchRef.id }
}


export { getDbProjects, setDbProject }