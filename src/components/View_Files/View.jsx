import React, { Component } from 'react';
import { convertBytes } from '../helpers';
import moment from 'moment'
import  './View.css'
import Navbar from '../Navbar/Navbar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { render } from 'react-dom';
//import FilePreviewer from 'react-file-previewer'
//import FilePreview from "react-file-preview-latest";


class View extends Component {
  //onError = (err) => console.log("Error:", err);
  render() {
    return (
      
      <div className="View">
        <Navbar account={this.props.account} />
        <table className="table-sm table-bordered text-monospace" style={{ width: '1000px', maxHeight: '450px' }}>
          <thead style={{ 'fontSize': '15px' }}>
            <tr className="bg-dark text-white">
              <th scope="col" style={{ width: '10px' }}>id</th>
              <th scope="col" style={{ width: '200px' }}>name</th>
              <th scope="col" style={{ width: '230px' }}>description</th>
              <th scope="col" style={{ width: '120px' }}>type</th>
              <th scope="col" style={{ width: '90px' }}>size</th>
              <th scope="col" style={{ width: '90px' }}>date</th>
              <th scope="col" style={{ width: '120px' }}>uploader/view</th>
              <th scope="col" style={{ width: '120px' }}>hash/view/get</th>
            </tr>
          </thead>
          {this.props.files.map((file, key) =>  {
            return (
              <thead style={{ 'fontSize': '12px' }} key={key}>
                <tr>
                  <td>{file.fileId}</td>
                  <td>{file.fileName}</td>
                  <td>{file.fileDescription}</td>
                  <td>{file.fileType}</td>
                  <td>{convertBytes(file.fileSize)}</td>
                  <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                  <td>
                    <a
                      href={"https://etherscan.io/address/" + file.uploader}
                      rel="noopener noreferrer"
                      target="_blank">
                      {file.uploader.substring(0, 10)}...
                    </a>
                  </td>
                  <td>
                    <a
                      href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                      rel="noopener noreferrer"
                      target="_blank">
                      {file.fileHash.substring(0, 10)}...
                    </a>
                    
                    {/* <FilePreview
                        type={"file"}
                        file={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                        onError={this.onError}
                        /> 
                      */}
                  </td>
                </tr>
              </thead>
            )
          })}
        </table>
        {/*<FilePreviewer file={{url:"https://ipfs.infura.io/ipfs/" + file.fileHash}}/>*/}
      </div>
    )
  }
}
export default View;