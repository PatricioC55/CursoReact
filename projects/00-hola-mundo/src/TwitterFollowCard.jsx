//import './App.css';
import { useState } from 'react';

export function TwitterFollowCard ({ 
    children,
    name = 'None', 
    userName = 'unknown',
    initialIsFollowing = false
}) {
    const [ isFollowing, setIsFollowing ] = useState(initialIsFollowing);
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const btnClassName = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button';
    
    const handlerClick = () => setIsFollowing(!isFollowing);

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar' 
                    src={ `https://unavatar.io/twitter/${ userName }` }
                    alt="Avatar" 
                />
                <div className='tw-followCard-info'>
                    <strong>{ !children ? name : children }</strong>
                    <span className='tw-followCard-infoUserName'>{`@${ userName }`}</span>
                </div>
            </header>

            <aside>
                <button className={ btnClassName } onClick={ handlerClick }>
                    <span className='tw-followCard-text'>{ text }</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}