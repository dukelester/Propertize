import React, { useState, useContext } from 'react';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import FormData from 'form-data';

import API_HOST from '../../configs';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const AddProperty = () => {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  if (!user) {
    history.push('/sign-in');
  };
  let publicUrl = process.env.PUBLIC_URL+'/'
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [propertyFor, setPropertyFor] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [area, setArea] = useState('');
  const [rooms, setRooms] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [kitchen, setKitchen] = useState('');
  const [livingRoom, setLivingRoom] = useState('');
  const [amenities, setAmenities] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [images, setImages] = useState('');
  const [zip, setZip] = useState('');
  const [category, setCategory] = useState('')
  const [attachments, setAttachments] = useState('')
  const [propertyType, setPropertyType] = useState('')

  const propertyForm = new FormData();
  propertyForm.append('title', title);
  propertyForm.append('price', parseInt(price));
  propertyForm.append('propertyFor', propertyFor);
  propertyForm.append('latitude', parseFloat(latitude));
  propertyForm.append('longitude', parseFloat(longitude));
  propertyForm.append('area', parseInt(area));
  propertyForm.append('rooms', parseInt(rooms));
  propertyForm.append('bathrooms', parseInt(bathrooms));
  propertyForm.append('bedrooms', parseInt(bedrooms));
  propertyForm.append('kitchen', parseInt(kitchen));
  propertyForm.append('livingRoom', parseInt(livingRoom));
  propertyForm.append('amenities', amenities);
  propertyForm.append('address', address);
  propertyForm.append('city', city);
  propertyForm.append('country', country);
  propertyForm.append('description', description);
  propertyForm.append('images', images);
  propertyForm.append('zip', zip);
  propertyForm.append('category', category);
  propertyForm.append('attachments', attachments);
  propertyForm.append('propertyType', propertyType);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
       const response = await axios.post(`${API_HOST}/`, propertyForm,
       { headers: {'Content-Type': 'multipart/form-data'}}
       )
       if (response.status === 201) {
       setTimeout(() => {
        <Alert severity="success">The property was successfuly created!</Alert>
       }, 3000);

       history.push('/')
      }
    } catch (error) {
        console.log(error);
    };
  }

  return <div className="add-property-area pd-top-120">
  <div className="container">
    <form method='post' onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="btn btn-base hover-none">Property Basic Information</div>
      <div className="property-form-grname">
        <div className="row">
          <div className="col-12">
            <label className="single-input-inner style-bg-border">
              <span className="label">Property Title</span>
              <input type="text" name="title" required  placeholder='Humility apartments'
                onChange={(e) => setTitle(e.target.value)}
               value={title}
              />
            </label>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Price (Kes)</span>
              <input type="text" name="price" required placeholder='200,000'
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </label>
          </div>
        
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Property For</span>
              <input type="text" required placeholder='RENT' name="latitude"
                onChange={(e) => setPropertyFor(e.target.value)}
              />
            </label>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Latitude</span>
              <input type="text" required placeholder='23.09876456' name="latitude"
                onChange={(e) => setLatitude(e.target.value)}
                value={latitude}
              />
            </label>
          </div>
          
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Longitude</span>
              <input type="text" name='longitude' required placeholder='-63.09876456'
                onChange={(e) => setLongitude(e.target.value)}
                value={longitude}
              />
            </label>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Area (square meters)</span>
              <input type="text" name='area' required placeholder='340'
                onChange={(e) => setArea(e.target.value)}
                value={area}
              />
            </label>
          </div>
          
         
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Total Rooms</span>
              <input type="number" name='attachments'
               onChange={(e) => setRooms(e.target.value)} placeholder='2'/>
            </label>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Bedrooms</span>
              <input type="number" name='attachments' 
               onChange={(e) => setBedrooms(e.target.value)} placeholder='2'/>
            </label>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Bathrooms</span>
              <input type="number" name='attachments' 
               onChange={(e) => setBathrooms(e.target.value)} placeholder='2'/>
            </label>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Kitchen</span>
              <input type="number" name='attachments' 
               onChange={(e) => setKitchen(e.target.value)} placeholder='2'/>
            </label>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Living rooms</span>
              <input type="number" name='attachments' 
              onChange={(e) => setLivingRoom(e.target.value)} placeholder='2'/>
            </label>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Attachments</span>
              <input type="text" name='attachments'
               onChange={(e) => setAttachments(e.target.value)}/>
            </label>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Amenities</span>
              <input type="text" name='amenities' 
              onChange={(e) => setAmenities(e.target.value)}/>
            </label>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Category</span>
              <input type="text" name='category' required placeholder='Villa'
                onChange={(e) => setCategory(e.target.value)}
              />
            </label>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Property Type</span>
              <input type="text" name='category' required placeholder='Double cabin'
                onChange={(e) => setPropertyType(e.target.value)}
              />
            </label>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Description</span>
              <textarea type="text" name='description' required placeholder='As fully furninshed house'
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
          <div className="col-12">
            <div className="avatar-upload-input text-center">
              <img src={publicUrl+"assets/img/icon/upload.png"} alt="img" />
              <h2>Upload your photo</h2>
              <p>Its must be a clean photo</p>
              <div className="avatar-edit-input">
                <input className="btn btn-base" type="file" id='imageUpload' name="imageUpload" 
                accept=".png, .jpg, .jpeg" required
                onChange={(e) => setImages(e.target.files[0])}
                />
                <label className="btn btn-base" htmlFor="imageUpload">Click here to Upload</label>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Address</span>
              <input type="text" name='address' required
              onChange={(e) => setAddress(e.target.value)}/>
            </label>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">City</span>
              <input type="text" name='city' required
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Country</span>
              <input type="text" name='country' required
                onChange={(e) => setCountry(e.target.value)}
              />
            </label>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Zip Code</span>
              <input type="text" name='zip' required
                onChange={(e) => setZip(e.target.value)}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="btn btn-base hover-none">Contact Details</div>
      <div className="property-form-grname">
        <div className="row">
          <div className="col-md-4">
            <label className="single-input-inner style-bg-border">
              <input type="text" placeholder="Name" />
            </label>
          </div>
          <div className="col-md-4">
            <label className="single-input-inner style-bg-border">
              <input type="text" placeholder="Email" />
            </label>
          </div>
          <div className="col-md-4">
            <label className="single-input-inner style-bg-border">
              <input type="text" placeholder="Phone" />
            </label>
          </div>
          <div className="col-12">
            <label className="single-input-inner style-bg-border">
              <textarea placeholder="Description" defaultValue={""} />
            </label>
          </div>
          <div className="col-12 text-center mb-4">
            <button type='submit' className="btn btn-base" onSubmit={handleSubmit}>Submit Now</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
}

export default AddProperty