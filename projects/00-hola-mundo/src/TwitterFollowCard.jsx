import './App.css';

export function TwitterFollowCard ({ 
    name = 'None', 
    userName = 'unknown', 
    isFollowing = false 
}) {
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const btnClassName = isFollowing 
        ? 'tw-followCard-button is-folowing' 
        : 'tw-followCard-button'
    
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar' 
                    src={ `https://unavatar.io/twitter/${ userName }` }
                    alt="Avatar" 
                />
                <div className='tw-followCard-info'>
                    <strong>{ name }</strong>
                    <span className='tw-followCard-infoUserName'>{`@${ userName }`}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}