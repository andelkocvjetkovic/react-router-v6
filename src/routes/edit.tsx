import { Form } from "react-router-dom";

export async function action() {
  console.log('edit context action')
  return null;
}

export async function loader() {
  console.log('edit context loader')
  return null;
}

function EditContact() {

  return (
    <Form method="post" id="contact-form">
      <label>
        <span>Notes</span>
        <textarea
          name="todo"
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}

export default Object.assign(EditContact, { action, loader })
