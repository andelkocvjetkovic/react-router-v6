import { Outlet } from 'react-router-dom'

export async function loader() {
  console.log('root loader');
  return null;
}


export async function action() {
  console.log('root action');
}

function Root() {
  return <Outlet />
}

export default Object.assign(Root, { loader, action });
