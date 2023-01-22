import { Outlet, Link, useLoaderData, Form } from 'react-router-dom'
import { getContacts, createContact } from '../contacts'

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
