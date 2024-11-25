import './Agenda.css';

function Agenda() {
    return (
        <div className='Agenda'>
            <div className='Agenda-content'>
                
                <img src='/images/Untitled 1.jpg' alt='Agenda' className='Agenda-image' />
                <div className='Agenda-text'>
                    <h1 className='Agenda-title'>WORLD OF BUSINESS</h1>
                    <p>
                        Digital Transformation: Navigating the New Frontier. Digital transformation is changing the way we do business in every industry. This theme will help ...
                        <ul>
                            <li>
                                Leadership
                            </li>
                            <li>
                                Career Growth
                            </li>
                            <li>
                                Collaboration
                            </li>
                            <li>
                                Company Culture
                            </li>
                            <li>
                                <h2>Types of  sponsorship </h2>
                            </li>
                            <li>
                                Media sponsorship
                            </li>
                            <li>
                                Event sponsorship
                            </li>
                        </ul>
                    </p>


                    <button type='button' className='home-button'>Contact Us</button>
                </div>
            </div>
        </div>




    );
}

export default Agenda;