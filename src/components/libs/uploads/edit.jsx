import React, { Component } from "react";
import './style.css';
import ImageUploader from './uploaditem.js';
var pictures = []
var car_photo_raw = []
class ImagesUpload extends Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.getAllFile = this.getAllFile.bind(this);
    this.state = {
      pictures_review: []
    };
  }

  onDrop(picture) {
        if(picture.length != pictures.length){
          var file = picture[picture.length - 1]
          if(file){
            pictures = picture
            var reader = new FileReader();
            var url = reader.readAsDataURL(file)
            reader.onloadend = function (e) {
              var current = this.state.pictures_review
              current.push(reader.result)
              this.setState({pictures_review:current})
            }.bind(this);
          }
        }
        
    }

    removeImage(index){
     var ar2 = this.state.pictures_review
     pictures.splice(index, 1);
     car_photo_raw.splice(index, 1);
     ar2.splice(index, 1);
     console.log('removed',ar2.length)
     this.setState({pictures_review:ar2})
    }

    getAllFile(){
      return pictures;
    }

    setDefault(default_file, _raw){
        pictures = []
        pictures = [...default_file]
        car_photo_raw = _raw
        this.setState({pictures_review:default_file})
    }

    getDataUpload(){
      var array_picture = []
      var array = []
      pictures.map((item, i) => {  
        if(typeof item === 'string' || item instanceof String){
          array_picture.push(item)
        }else{
          array.push(item)
        }
      })
      return {file:array, image:array_picture, raw:car_photo_raw};

    }

    render() {
        return (
          <div className="image-upload-container">
                <div className="row">
                {this.state.pictures_review.map((img, i) => {     
                   return(<div className="col-md-6" key={i}>
                            <div className="upload-frame animated zoomInUp faster" ref={`file${i}`}>
                              <div className="fileUploader ">
                                <div className="fileContainerX haveImage " style={{backgroundImage:`url('${img}')`}}>

                                </div>
                                 <a className="remove-file" onClick={this.removeImage.bind(this, i)}><img src="/img/ic-remove.png"/></a>
                              </div>
                            </div>
                          </div>)
                })}
                


                  <div className="col-md-6" style={{display:this.state.pictures_review.length==5?'none':'block'}}>
                       <div className="upload-frame">
                          <ImageUploader
                              singleImage={true}
                              withIcon={true}
                              buttonText='Choose images'
                              onChange={this.onDrop}
                              imgExtension={['.jpg', '.gif', '.png', '.gif']}
                              maxFileSize={5242880}
                          />
                        </div>
                  </div>

                </div>
               
          </div>
        )
    }
}

export default ImagesUpload;