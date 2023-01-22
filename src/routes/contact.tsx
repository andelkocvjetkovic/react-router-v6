import { Outlet } from 'react-router-dom'
export async function loader() {
  console.log('contact loader');
  return null;
}


export async function action() {
  console.log('contact action');
  return null;
}

function Contact() {

  return <Outlet />
}

export default Object.assign(Contact, { loader, action });

