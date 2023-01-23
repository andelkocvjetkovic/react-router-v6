import { Outlet } from 'react-router-dom'


const delay = async <T,>(value: T, ms = 2000): Promise<T> =>
  await new Promise((res) =>
    setTimeout(() =>
      res(value),
      ms
    )
  )

export async function loader() {
  console.log('contact loader');
  await delay(1000000);
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

