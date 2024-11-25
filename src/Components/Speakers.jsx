import './Speakers.css';

function Speakers() {
    const posts = [
        {
            id: 1,
            title: 'Leadership',
            image: '/images/Untitled 2.jpg',
            content: 'Leadership, is defined as the ability of an individual, group, or organization to "lead", influence, or guide other individuals, teams, or organizations. "Leadership" is a contested term'},
        {
            id: 2,
            title: 'Career Growth',
            image: '/images/Untitled. 6jpg.jpg',
            content: 'Purpose: To understand an employees goals and desires around career growth and development. Career growth is a key driver of employee engagement and retention, ...' },
        {
            id: 3,
            title: 'Collaboration',
            image: '/images/Untitled 5.jpg',
            content: 'Promoting Team Work & Collaboration. The challenges of leading people in business are many and varied, especially in a business world made richer by ...' },
        {
            id: 4,
            title: 'Company Culture',
            image: '/images/Untitled 4.jpg',
            content: 'Company culture is an essential aspect to any company, and your students will need to understand the value of a good company culture versus a bad one. Here are ...' },
       
    ];

    return (
        <div className='Speakers'>
            <div className='grid-container'>
                {posts.map((post) => (
                    <div key={post.id} className='card'>
                        <img src={post.image} alt={post.title} className='speakers-image' />
                        <div className='post-text'>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Speakers;