function MoreDetailes() {

    const posts = [
        {
            id: 1,
            title: 'Diversity & Inclusion',
            image: '/images/2024-01-01-Distribution-of-Key-Industries-in-India.png',
            content: 'Promoting diversity and inclusion. Emphasize the value of diversity and inclusion in teams and discuss ways to create an inclusive environment where all ...'  },
        {
            id: 2,
            title: 'Industry news',
            image: '/images/images. 10jpg.jpg',
            content: 'Industry news. Discussing the latest industry trends and news can be exciting and show that you are up to date with professional topics. Training and ...'},
        {
            id: 3,
            title: 'Delivering Feedback',
            image: '/images/Untitled. 12jpg.jpg',
            content: 'Delivering constructive feedback. Being able to deliver and receive constructive feedback is a crucial part of any employees job, no matter where they are ...'},
        {
            id: 4,
            title: '.Goal Setting',
            image: '/images/Untitled. 11jpg.jpg',
            content: 'Greater productivity: Manager meeting topics focusing on goal setting, task allocation, and progress tracking help keep teams on track and accountable for their' 
        },
        
    ];

    return (
        <div className='MoreDetailes-text'>
                    <h2 className='MoreDetailes-title'>MoreDetailes</h2>
                    <p> Our Projects</p>
                    <div/>
        <div className='MoreDetailes'>
            <div className='grid-container'>
                {posts.map((post) => (
                    <div key={post.id} className='card'>
                        <img src={post.image} alt={post.title} className='MoreDetailes-image' />
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

export default MoreDetailes;