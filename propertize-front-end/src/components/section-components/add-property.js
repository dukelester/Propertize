import React, { useState } from 'react';

const AddProperty = () => {
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
  
  const handleChange = (event) => {
    setPropertyDetails({ [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return <div className="add-property-area pd-top-120">
  <div className="container">
    <form>
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
            <div className="single-select-inner style-bg-border">
              <span className="label" name="propertyFor" 
              onChange={(e) => setPropertyFor(e.target.value)}>Property For</span>
              <select>
                <option value={'RENT'}>RENT</option>
                <option value={'BUY'}>BUY</option>
                <option value={"BUILD"}>BUILD</option>

              </select>
            </div>
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
            <div className="single-select-inner style-bg-border">
              <span className="label" name='rooms' 
              onChange={(e) => setRooms(e.target.value)}>Total Rooms</span>
              <select>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="single-select-inner style-bg-border">
              <span className="label" name='bedrooms' 
              onChange={(e) => setBedrooms(e.target.value)}>Bedrooms</span>
              <select>
              <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="single-select-inner style-bg-border">
              <span className="label" name='bathrooms'
              onChange={(e) => setBathrooms(e.target.value)}>Bathrooms</span>
              <select>
              <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="single-select-inner style-bg-border">
              <span className="label" name='kitchen'
              onChange={(e) => setKitchen(e.target.value)}>Kitchen</span>
              <select>
              <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="single-select-inner style-bg-border">
              <span className="label" name='livingroom' 
              onChange={(e) => setLivingRoom(e.target.value)}>Livingroom</span>
              <select>
              <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Attachments</span>
              <input type="text" name='attachments' onChange={(e) => setAttachments(e.target.value)}/>
            </label>
          </div>
          <div className="col-md-6">
            <label className="single-input-inner style-bg-border">
              <span className="label">Amenities</span>
              <input type="text" name='amenities' onChange={(e) => setAmenities(e.target.value)}/>
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
            <button className="btn btn-base" onSubmit={handleSubmit}>Submit Now</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
}

export default AddProperty