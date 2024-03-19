import React from 'react'
import Button from './reuse/Button'
import Input from './reuse/Input'

const Main = () => {
    return (
        <>
            <div className='main-container'>
                <div style={{
                    textAlign: 'center'
                }}>
                    <h1>Unlimited movies, TV <br />shows, and more</h1>
                    <h5>Starts at Rs 250. Cancel anytime.</h5>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>


                <div>
                    {/* input here */}
                    <Input />
                </div>
            </div>

        </>
    )
}

export default Main
