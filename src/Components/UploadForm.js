import { useState } from "react";
import { Alert, Dropzone, Form, Button } from "."
import csvtojson from "csvtojson";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function UploadForm(props) {

    const navigate = useNavigate();
    const location = useLocation();

    const [formState, setFormState] = useState({
        checkbox: null,
        file: null,
    });

    const resetForm = () => {
        document.getElementById("upload-form").reset()
        window.dispatchEvent(new CustomEvent("resetDropzone"));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)

        formState.file.text()
            .then((result) => {

                //Use the csvtojson module to change the previous string to a json object.
                csvtojson().fromString(result).then((jsonObj) => {
                    console.log(jsonObj)

                    // Send converted JSON from CSV to the appropiate backend endpoint based on "props.data.endpoint" passed down from App.js
                    axios.post(props.data.endpoint,
                        { jsonObj },
                        {
                            headers: {
                                "Authentication": sessionStorage.getItem('__auth'),
                                "Content-Type": "application/json",
                            }
                        })
                        .then((res) => {
                            console.log(res.data)

                            // TODO: Show success alter message then redirect to results page

                            // Pass data to the results page
                            setTimeout(() => {
                                navigate('results', {
                                    state: {
                                        prevpage: location.pathname,
                                        data: {
                                            id: 7, color: 'green'
                                        }
                                    }
                                });
                            }, 2000)
                        })
                        .catch((error) => {
                            console.log(error)
                        });
                });
            })

    }

    return (
        <main>
            <div className="container">
                <Alert type='info'>{props.data.description}</Alert>
                <Form action={props.data.endpoint} id="upload-form">
                    <>
                        <Dropzone setParentFormState={setFormState} parentFormState={formState} />
                        <div className="formItem">
                            <label>
                                <input type='checkbox' onChange={(e) => setFormState({ ...formState, checkbox: e.target.checked })} />
                                I understand that there will be no validation against the data in my file. I confirmed I have checked the data for correctness and I am ready to upload.
                            </label>
                        </div>
                        <div className="formItem inline-buttons">
                            <Button label="Process Upload" onClick={handleSubmit} classes="secondary" />
                            <Button label="Reset" classes="secondary-outlined" onClick={resetForm} />
                        </div>
                    </>
                </Form>
            </div>
        </main>
    )
}