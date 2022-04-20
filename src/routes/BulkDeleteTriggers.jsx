import { useState } from "react";
import { Alert, Dropzone, Form, Button } from "../components"

export default function BulkDeleteTriggers() {

    const [formState, setFormState] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
        // TODO: Pass the data to the backend to handle the csv upload
    }

    return (
        <main>
            <div className="container">
                <Alert type='info'>Something related to bulk deleting triggers</Alert>
                <Form action=''>
                    <>
                        <Dropzone setParentFormState={setFormState} parentFormState={formState} />
                        <div className="formItem">
                            <label>
                                <input type='checkbox' onChange={(e) => setFormState({ ...formState, checkbox: e.target.checked })} />
                                I have double-checked the data in the file. I am ready to proceed with the bulk operation
                            </label>
                        </div>
                        <div className="formItem inline-buttons">
                            <Button label="Process Upload" onClick={handleSubmit} classes="secondary" />
                            <Button label="Reset" classes="secondary-outlined" />
                        </div>
                    </>
                </Form>
            </div>
        </main>
    )
}