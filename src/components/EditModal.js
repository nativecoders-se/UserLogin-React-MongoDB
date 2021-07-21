import React from "react";
import EditForm from './EditForm';
import { Button, Modal } from 'semantic-ui-react'

export default function EditModal() {
  return (
    <div>
      <Modal
        trigger={<Button>Edit Profile</Button>}
        // header="Edit Profile!"
        content={ <EditForm/> }
        // actions={["Snooze", { key: "done", content: "Done", positive: true }]}
      />
    </div>
  );
}
