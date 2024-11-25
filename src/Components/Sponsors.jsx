function Sponsors() {

    const posts = [
        {
            id: 1,
            title: 'Media sponsorship',
            image: '/images/istockphoto-1173494845-612x612.jpgn555.jpg',
            content: 'A sponsor places ads in the sponsors publications, newspapers, or on TV. Radio is another medium that can be used to announce promotions to a wide audience.'  },
        {
            id: 2,
            title: 'Event sponsorship',
            image: '/images/istockphoto-520948744-612x612.jpg',
            content: 'A business, individual, or other entity provides funding for an event in exchange for brand exposure or other benefits. For example, a sponsor may receive hosting space, increased exposure, or access to food, entertainment, or other resources.'},
       
    ];

    return (
        <div className='Sponsors-text'>
                    <h2 className='Sponsors-title'>Sponsors</h2>
                    <p> SPONSORSHIPS</p>
                    <div/>
        <div className='Sponsors'>
            <div className='grid-container'>
                {posts.map((post) => (
                    <div key={post.id} className='card'>
                        <img src={post.image} alt={post.title} className='Sponsors-image' />
                        <div className='post-text'>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Sponsors;