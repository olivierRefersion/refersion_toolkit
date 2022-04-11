import axios from "axios";
import React, { Component } from "react";
import { sendManualOrders } from "../functions";
import { useState } from "react";
import { readRemoteFile } from 'react-papaparse'
import CSV from 'papaparse';

const csvFilePath = 'test.csv'

export default class Form extends React.Component {
  state = {
    pubKey: null,
    secKey: null,
    selectedFile: null,
    json: null
  }

  handleChange = event => {
    //this.setState({ name: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  }


  onFileChange = event => {

    // Update the state
    this.setState({ selectedFile: event.target.files[0] });

  };

  handleSubmit = event => {
    event.preventDefault();

    // const user = {
    //   name: this.state.name
    // };

    const formAuthentication = {
      pubKey: this.state.pubKey,
      secKey: this.state.secKey,
    };

    // console.log(this.state.pubKey);
    // console.log(this.state.secKey);

    //   axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
    //     .then(res => {
    //       console.log(res);
    //       console.log(res.data);
    //     })
    //   console.log(this.state.selectedFile)
    // const csvConfig = {
    //   header: true,
    //   complete: function (results) {
    //     // console.log("Finished", results.data);
    //     // console.log(typeof(results.data));
    //     const dataReadyToBeSent = JSON.stringify(results.data);
    //     console.log(dataReadyToBeSent);
    //     console.log({ pubKey: this.state.pubKey });
    //     // console.log(this.state.secKey);

        
    //   }
    
    // };
    console.log(this.state.selectedFile);
    const objectData = CSV.parse(this.state.selectedFile, {complete: (results) => {
      this.setState({json: results.data})
      //console.log("Finished:", results.data);
    }});
    setTimeout( () => {
      
      console.log(this.state.json);
      console.log(this.state.pubKey);
      console.log(this.state.secKey);
    
    }, 3000

    //I need a Promise I think.
      
    );
    console.log(this.state.pubKey);
    console.log(this.state.secKey);
    // for (let i = 0; i < dataReadyToBeSent.length; i++) {
        //     // console.log(dataReadyToBeSent[0].Order_ID);
        //     // console.log(dataReadyToBeSent[0].Affiliate_ID);
        //     // console.log(dataReadyToBeSent[0].Status);
        //     // console.log(dataReadyToBeSent[0].Notes);
        //     let order_id = dataReadyToBeSent[i].order_id; 
        //     let id =  dataReadyToBeSent[i].affiliate_id;
        //     let status = dataReadyToBeSent[i].status;
        //     let notes = dataReadyToBeSent[i].notes;
        //     axios({
        //         method: 'post',
        //         url: 'https://www.refersion.com/api/manual_credit_order_id',
        //         headers: {
        //             "Refersion-Public-Key": this.state.pubKey,
        //             "Refersion-Secret-Key": this.state.secKey,
        //             "Content-Type": "application/json"
        //         },
        //         data: {
        //             order_id,
        //             id,
        //             status,
        //             notes
        //         }   
        //         })
        //         .then(function (response) {
        //         // handle success
        //         console.log(`For ${order_id} the Post is ${response.statusText}. ${response.data.message}`);
        //         })
        //         .catch(function (error) {

        //             console.log(`For ${order_id}, ${error.response.data.error}`);
        //             // console.log(error);
        //         });
        // };


  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Public Key
            <input type="text" name="pubKey" onChange={this.handleChange} />
          </label>
          <label>
            Secret Key
            <input type="text" name="secKey" onChange={this.handleChange} />
          </label>
          <input type="file" onChange={this.onFileChange.bind(this)} />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}















// const handleChange = (event) => {
//     // setformValue({
//     //   ...formValue,
//     //   [event.target.name]: event.target.value
//     // });
// } 


// const handleSubmit = async() => {
//     // store the states in the form data
//     // const loginFormData = new FormData();
//     // loginFormData.append("username", formValue.email)
//     // loginFormData.append("password", formValue.password)
  
//     // try {
//     //   // make axios post request
//     //   const response = await axios({
//     //     method: "post",
//     //     url: "/api/login",
//     //     data: loginFormData,
//     //     headers: { "Content-Type": "multipart/form-data" },
//     //   });
//     // } catch(error) {
//     //   console.log(error)
//     // }
//     csvtojson()
//     .fromFile(csvFilePath)
//     .then((dataReadyToBeSent)=>{
//     // console.log(dataReadyToBeSent);
//     for (let i = 0; i < dataReadyToBeSent.length; i++) {
//         // console.log(dataReadyToBeSent[0].Order_ID);
//         // console.log(dataReadyToBeSent[0].Affiliate_ID);
//         // console.log(dataReadyToBeSent[0].Status);
//         // console.log(dataReadyToBeSent[0].Notes);
//         let order_id = dataReadyToBeSent[i].order_id; 
//         let id =  dataReadyToBeSent[i].affiliate_id;
//         let status = dataReadyToBeSent[i].status;
//         let notes = dataReadyToBeSent[i].notes;
//         axios({
//             method: 'post',
//             url: 'https://www.refersion.com/api/manual_credit_order_id',
//             headers: {
//                 "Refersion-Public-Key": "pub_dbc37e60b31cdaa21e11",
//                 "Refersion-Secret-Key": "sec_76f6cb125e64c4ec22e5",
//                 "Content-Type": "application/json"
//             },
//             data: {
//                 order_id,
//                 id,
//                 status,
//                 notes
//             }   
//             })
//             .then(function (response) {
//             // handle success
//             console.log(`For ${order_id} the Post is ${response.statusText}. ${response.data.message}`);
//             })
//             .catch(function (error) {
                
//                 console.log(`For ${order_id}, ${error.response.data.error}`);
//                 // console.log(error);
//             });
//         }
//     })
//     csvtojson();
// }

// class Form extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             pubKey: '',
//             secKey: '',
//             csv: {},
//             selectedFile: ''
//         }
//     }

//     handleChange(event) {
//         this.setState(event.target.value);
//     }

//     // handleChange(event) {
//     //     this.setState({value: event.target.value});
//     // }

//     // const handleChange = (event) => {
//     //     // setformValue({
//     //     //   ...formValue,
//     //     //   [event.target.name]: event.target.value
//     //     // });
//     // } 

//     onFileChange = event => {
    
//         // Update the state
//         this.setState({ selectedFile: event.target.files[0] });
      
//     };

//     onFileUpload = () => {
    
//         // Create an object of formData
//         const formData = new FormData();
      
//         // Update the formData object
//         formData.append(
//           "myFile",
//           this.state.selectedFile,
//           this.state.selectedFile.name
//         );
      
//         // Details of the uploaded file
//         console.log(this.state.selectedFile);
      
//         // Request made to the backend api
//         // Send formData object
//         //axios.post("api/uploadfile", formData);
//     };

//     render(){
//         return(
//             <form>
//                 {/* onSubmit={handleSubmit} */}
//       <p>Upload Form</p>
//       <input
//         type="input"
//         name="pubKey"
//         placeholder="Add the Public Key"
//         value={this.state.pubKey}
//         onChange={handleChange}
//       />
//       <input
//         type="input"
//         name="secKey"
//         placeholder="add the Secret Key"
//         value={this.state.secKey}
//         onChange={handleChange}
//       />
//       <input
//         type="file"
//         name="csv"
//         placeholder="upload your csv file"
//         value={this.state.selectedFile}
//         onChange={handleChange}
//       />
//       <button
//         type="submit"
//         onClick={this.onFileUpload}
//       >
//         Submit
//       </button>
//     </form>
//         );
//     }
// }
