import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App () {
    const ddTech = { isFollowing: true, name: 'DdTech', userName: 'DDTECHMX' };

    return (
        <section className='App'>

            <TwitterFollowCard 
                isFollowing 
                name="Patricio_14Rgb" 
                userName="P14rgb" 
            />

            <TwitterFollowCard 
                name="Mr. Roshi" 
                userName="MrRoshi92" 
            />

            <TwitterFollowCard {...ddTech }/>

            <TwitterFollowCard 
                name="DeepCool" 
                userName="DeepcoolGlobal" 
            />
            
            <TwitterFollowCard 
                name="Aerocool" 
                userName="AerocoolGlobal" 
            />
        </section>
    )
}