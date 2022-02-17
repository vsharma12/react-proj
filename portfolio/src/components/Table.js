import React from 'react';

export default function Table(props) {
    return (
        <>
            <table className=" tb--content table table-borderless ">
                <tbody>
                    <tr>
                        <td className='capital'>age</td>
                        <td className='user--deta'> {props.age}</td>

                    </tr>
                    <tr>
                        <td className='capital'>address</td>
                        <td className='user--deta'>{props.address}</td>

                    </tr>
                    <tr>
                        <td className='capital'>e-mail</td>
                        <td className='user--deta'>{props.email}</td>

                    </tr>
                    <tr>
                        <td className='capital'>phone</td>
                        <td className='user--deta'>{props.phone}</td>
                    </tr>

                </tbody>
            </table>
        </>
    );
}
