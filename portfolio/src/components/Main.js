import React from 'react';
import './main.css';
import Img from './Img';  //importing image 
import Table from './Table'; //importing table content 
// import Skills from './Skills'    

export default function Main() {
    return (
        <>
            <div className='main--box'>

                <div className='main--div '>

                    <div className='main--userImg'>
                        <img src="https://img.icons8.com/material-outlined/48/000000/user--v1.png" />
                    </div>

                    <div className='main--userDetails'>
                        <div className='details--box'>
                            <h5><span className="badge bg-success">hey!!</span></h5>

                            <div>
                                <h3 ><span className='div--intro '>I'm</span>  Varun </h3>
                            </div>
                            <hr />

                            {/* table content */}
                            <Table
                                email='sharmavarun2504@gmail.com'
                                age='20'
                                address='terekokya'
                                phone='+91 8920693245'
                            />

                        </div>
                    </div>

                </div>

                <div className='main--footer'>
                    <Img
                        name='linkedin-in'
                        link="https://www.linkedin.com/in/varun-sharma-607b86217/"
                    />
                    <Img
                        name='instagram'
                        link="https://www.instagram.com/avru.n/"
                    />
                    <Img
                        name='github'
                        link="https://github.com/vsharma12"
                    />
                </div>


            </div>
           
        </>
    )
}