import { useRef, useState } from 'react';
import './Dropzone.css';
import { Icon } from '..';

/**
 * Main application header that can have a state of logged in or not logged in
 */
export const Dropzone = (props) => {

    // Create a ref to the input component so we can later trigger a click from the dropzone
    const uploadInputField = useRef(null);
    const [text, setText] = useState('Drag & drop your file here or click here to upload one.');
    const [isActive, setIsActive] = useState(false);
    const [isDropActive, setIsDropActive] = useState(false);
    const active = isActive ? 'active' : '';
    const highlighted = isDropActive ? 'highlighted' : '';

    const toggleFileWindow = () => {
        uploadInputField.current?.click()
        setText('Waiting for file ...')
    }

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            props.setParentFormState({...props.parentFormState, file: e.target.files[0]})
            setText(e.target.files[0].name)
            setIsActive(true)
        } else {
            setText('Drag & drop your file here or click here to upload one.')
        }
    }

    const handleDragLeave = (e) => {
        e.preventDefault()
        setIsDropActive(false)
        setText('Drag & drop your file here or click here to upload one.')
    };

    const handleDragEnterandDragOver = (e) => {
        e.preventDefault()
        setIsDropActive(true)
    };

    const handleDrop = (e) => {
        e.preventDefault()
        props.setParentFormState({...props.parentFormState, file: e.dataTransfer.files[0]})
        setIsDropActive(false)
        setIsActive(true)
        setText(e.dataTransfer.files[0].name)
    };

    return (
        <div
            className={[active, highlighted, "drag-area"].join(' ').trim()}
            onClick={toggleFileWindow}
            onChange={handleFileChange}
            onDragOver={handleDragEnterandDragOver}
            onDragEnter={handleDragEnterandDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}>
            <Icon icon='cloud_upload' />
            <p>{text}</p>
            <input
                ref={uploadInputField}
                type="file"
                accept="text/csv"
                hidden />
        </div>
    )
}