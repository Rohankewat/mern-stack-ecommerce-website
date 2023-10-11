import './Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
    var f10 = (evt) => {
        // evt.preventDefault();

    }
    return (
        <div>
            <div className="container-fluid contact_main">
                <div className='row'>
                    <div className='col-lg-12'>
                        <center>
                            <h4 className='con-h41'>Get in Touch</h4>
                            <p className='con-h41'>Please use online form below for more information</p>
                        </center>
                    </div>
                    <div className='col-lg-12'>
                        <form action="https://formspree.io/f/xdojzgrr" method="post"
                            onSubmit={f10} target='_blank' >
                            <center>
                                <div className='col-lg-6'>
                                    <input className='cls18' placeholder='Enter your name' type='text' name="Name : " required></input>
                                </div>
                                <div className='col-lg-6'>
                                    <input className='cls18' type='email' required placeholder='enter email' name='Email : '></input>
                                </div>
                                <div className='col-lg-6'>
                                    <input className='cls18' type='number' name='Contact no : ' placeholder='enter contact no' required></input>
                                </div>
                                <div className='col-lg-6'>
                                    <textarea className='cls18' name='Message' placeholder='Message'></textarea>
                                </div>
                                <div className='col-lg-6'>
                                    <button className='cls19 btn btn-outline-light'>Send</button>
                                </div>
                            </center>
                        </form>

                    </div>
                </div>
            </div>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <center>
                            <Link to={'https://www.linkedin.com/in/rohan-kewat-955041257'} target='_blank'>Linked in <i class="fa-brands fa-linkedin-in"></i></Link>
                        </center>
                    </div>
                    <div className='col-lg-4'>
                        <center>
                            <pre><i class="fa-solid fa-mobile"></i> 99310390</pre>
                        </center>
                    </div>
                    <div className='col-lg-4 cls-con-14'>
                        <center>
                            <Link> <i class="fa-sharp fa-solid fa-envelope"></i></Link>
                            <span className='con-span'>rohankewat7729@gmail.com</span>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;