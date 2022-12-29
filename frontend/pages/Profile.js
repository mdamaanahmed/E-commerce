import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { MdOutlinePersonOff } from 'react-icons/md';
import '../../assets/css/profile.css';
import Crud from "../apis/crud";
import Swal from 'sweetalert2';

const Profile = () => {
  const [showTab, setShowTab] = useState('details');
  const [imageName, setImageName] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [buyHistory, setBuyHistory] = useState([]);
  const navigate = useNavigate();
  const formData = new FormData();
  const crud = new Crud();

  const profileImg = async (e) => {
    let old_profile_image = localStorage.getItem("old_profile_image");
    let userId = localStorage.getItem("userId");
    const imgObj = e.target.files[0];
    formData.append("file", imgObj);
    formData.append("old_profile_image", old_profile_image);
    formData.append("userId", userId);
    const uploadedImage = await crud.post("create/upload-image", formData);
    if (uploadedImage.code) {
      localStorage.setItem("old_profile_image", uploadedImage.old_profile_image);
      let image = localStorage.getItem("old_profile_image");
      setImageName(`../../profileImages/${image}`);
    }
  };

  useEffect(() => {
    let image = localStorage.getItem("old_profile_image");
    setImageName(`../../profileImages/${image}`);
  }, []);

  const getUserData = async () => {
    let userId = localStorage.getItem("userId");
    const { result } = await crud.get(`retrive/user?userId=${userId}`);
    localStorage.setItem("userDetails", JSON.stringify(result));
    setUserDetails(JSON.parse(localStorage.getItem("userDetails")));
    const buy = await crud.get(`retrive/buy?userId=${userId}`);
    setBuyHistory(buy.result);
  };

  useEffect(() => {
    getUserData()
  }, []);

  const signOut = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2 px-4',
        cancelButton: 'btn btn-danger mx-2 px-3'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Sign Out',
      text: 'if you click on yes you will be signout.',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'cancel',
      confirmButtonText: 'Yes',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Sign Out',
          'success'
        );
        localStorage.clear();
        navigate("/login");
      };
    });
  };

  let openProfile = () => {
    navigate('/profile');
  };

  let activeParaColor = (e, value) => {
    let p = document.querySelectorAll('.activeStyle')
    let icon = document.querySelectorAll('.icon')

    p.forEach(element => {
      element.classList.remove('active_p_color')
    })
    icon.forEach(element => {
      element.classList.remove('active_p_color')
    })
    e.target.classList.add('active_p_color')
    e.target.firstChild.classList.add('active_p_color')
    setShowTab(value)
  };

  return (
    <>
      <div className="profile" onClick={openProfile}>
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-3">
              <div className="sidemenu">
                <h2>My Profile</h2>
                <div>
                  <p className='activeStyle active_p_color' onClick={(e) => activeParaColor(e, 'details')}><IoPersonCircleOutline className='icon active_p_color' />Details</p>
                  <p className='activeStyle' onClick={(e) => activeParaColor(e, 'addresses')}><HiOutlineLocationMarker className='icon' />Addresses</p>
                  <p className='activeStyle' onClick={(e) => activeParaColor(e, 'orders')}><MdOutlineShoppingBag className='icon' />Orders</p>
                  <p className='activeStyle' onClick={(e) => activeParaColor(e, 'sign-out')}><MdOutlinePersonOff className='icon' />Sign Out</p>
                </div>
              </div>
            </div>
            <div className="col-lg-9 mb-2">
              <div className="profile_content mb-5">
                {
                  showTab === 'details' ?
                    <div className="details">
                      <form enctype='multipart/form-data'>
                        <div className="row">
                          <div className='col-lg-12'>
                            <h4>My details</h4>
                            <p>Personal Details</p>
                          </div>
                          <div className="img">
                            <img src={imageName} alt="" />
                            <label className='change_image'>
                              Change Image
                              <input type="file" onChange={(e) => profileImg(e)} hidden />
                            </label>
                          </div>
                          {/* <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor="name">Name :</label>
                              <input type="text" className='form-control' name='name' id='name' />
                            </div>
                            <div className="col-lg-6">
                              <label htmlFor="dob">Date of Birth :</label>
                              <input type="date" className='form-control' name='dob' id='dob' />
                            </div>
                            <div className="col-lg-6">
                              <label htmlFor="phone">Phone :</label>
                              <input type="number" className='form-control' name='phone' id='phone' />
                            </div>
                            <div className="col-lg-6">
                              <label htmlFor="email">Email :</label>
                              <input type="email" className='form-control' name='email' id='email' />
                            </div>
                            <div>
                              <p>Password</p>
                            </div>
                            <div className="col-lg-6">
                              <label htmlFor="email">Email :</label>
                              <input type="email" className='form-control' name='email' id='email' />
                            </div>
                            <div className="col-lg-6">
                              <label htmlFor="password">Password :</label>
                              <input type="password" className='form-control' name='password' id='password' />
                            </div>
                            <div className="col-lg-3">
                              <button className='button_bg my-4'>Update Profile</button>
                            </div>
                          </div> */}
                        </div>
                      </form>
                      <div className="row">
                        <div className="col-lg-12 text-center">
                          <h5>Name : <span>{userDetails.name}</span></h5>
                          <h5>Email : <span>{userDetails.email}</span></h5>
                        </div>
                      </div>
                    </div>
                    :
                    showTab === 'addresses' ?
                      <div className="addresses">
                        <div className="row">
                          <div>
                            <h4>All Addresses</h4>
                          </div>
                          <div className="col-lg-6">
                            <div className="data">
                              <HiOutlineLocationMarker className='icon' />
                              <div>
                                <h6>Jhon Doe</h6>
                                <h6>485/DF Loha Mandi, Agra - 282010</h6>
                                <h6>9557093828</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="data">
                              <HiOutlineLocationMarker className='icon' />
                              <div>
                                <h6>Jhon Doe</h6>
                                <h6>485/DF Loha Mandi, Agra - 282010</h6>
                                <h6>9557093828</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="data">
                              <HiOutlineLocationMarker className='icon' />
                              <div>
                                <h6>Jhon Doe</h6>
                                <h6>485/DF Loha Mandi, Agra - 282010</h6>
                                <h6>9557093828</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <p>Add new Address:</p>
                            <input type="text" className='form-control w-50' name='newAddress' placeholder='write your address' />
                            <button className='button_bg'>Save</button>
                          </div>
                        </div>
                      </div>
                      :
                      showTab === 'orders' ?
                        <div className="orders">
                          <div className="row">
                            <div>
                              <h4>My Orders</h4>
                            </div>
                            {
                              buyHistory?.map((item, index) => {
                                return (
                                  <div key={index} className="col-lg-6 col-md-6 col-12 py-3">
                                    <div className="image">
                                      <img src={`../../images/${item.productId.image}`} alt="" />
                                      <div className="title">
                                        <h5>{item.productId.name}</h5>
                                        <p>description</p>
                                        <p>Qty - {item.qty}</p>
                                        <div>
                                          <h4>${item.productId.price}</h4>
                                          <p>upto {item.productId.discount}% off</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                        :
                        showTab === 'sign-out' ?
                          <div className="sign_out">
                            <div className="row">
                              <div>
                                <h4>Sign Out</h4>
                              </div>
                              <div className="col-lg-12">
                                <div>
                                  <h6>
                                    Are Yor Sure. You want to Sign Out
                                  </h6>
                                  <button className='red_button' onClick={() => signOut()}>Sign Out</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          : null
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile