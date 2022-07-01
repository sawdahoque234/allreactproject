import React from 'react';
import banner from '../img/banner.png'

const Banner = () => {
    return (
        <div className='container py-3 mx-3'>
            <div className="row my-3">
                <div className="col-md-6">
                    <div className="py-4">
<div style={{textAlign:'initial',margin:'60px',paddingTop:'50px'}}>
<h5 style={{fontSize:'60px',color:'#602cdb'}}>React Project</h5>
<p style={{fontSize:'20px',fontFamily:"cursive"}}>Projects are the most practical way to learn any language.So Here i show some of my react Projects.</p>
</div>
                    </div>
                </div>
                <div className="col-md-6  p-3">
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;