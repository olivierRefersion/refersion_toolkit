import { useState } from "react";
import { Alert, Dropzone, Form, Button } from "."
import csvtojson from "csvtojson";
import axios from "axios";

export default function UploadForm() {

    const [formState, setFormState] = useState({
        checkbox: null,
        file: null,
        jsonDataFromcsv: null,
        response: null  //might need to rename this
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)

        formState.file.text()
            .then((result) => {

                //Use the csvtojson module to change the previous string to a json object.
                csvtojson().fromString(result).then((jsonObj) => {
                    console.log(jsonObj)

                    //Axios call to our backend endpoint with the Public Key, Secret Key and Json Object in the body of the request.
                    /*
                    axios.post('http://localhost:3000/test', {
                        jsonObj
                    })
                        .then((res) => {
                            console.log(res.data)
                        })
                        .catch((error) => {
                            console.log(error)
                        });
                        */
                });
            })

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