import './App.css';
import { useState } from 'react';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
    { 
        name: 'Patricio_14Rgb', 
        userName: 'P14rgb', 
        initialIsFollowing: true  
    },
    { 
        name: 'Mr. Roshi', 
        userName: 'MrRoshi92', 
        initialIsFollowing: false  
    },
    { 
        name: 'DdTech', 
        userName: 'DDTECHMX', 
        initialIsFollowing: true  
    },
    { 
        name: 'DeepCool', 
        userName: 'DeepcoolGlobal', 
        initialIsFollowing: true  
    },
    { 
        name: 'Aerocool', 
        userName: 'AerocoolGlobal', 
        initialIsFollowing: false  
    }
];

export function App () {
    const ddTech = { initialIsFollowing: true, name: 'DdTech', userName: 'DDTECHMX' };

    return (
        <section className='App'>
            {
                /* 
                    -- Forma larga de usar map
                users.map( user => {
                    const { name, userName, initialIsFollowing } = user;
                    
                    return (
                        <TwitterFollowCard
                            name = { name }
                            userName = { userName }
                            initialIsFollowing = { initialIsFollowing }
                        />
                    )
                }) */

                /* -- Forma simplificada */
                users.map( ({ name, userName, initialIsFollowing }) => (
                    <TwitterFollowCard
                        name = { name }
                        userName = { userName }
                        initialIsFollowing = { initialIsFollowing }
                    />
                ))
            }
            {/*
            <TwitterFollowCard 
                initialIsFollowing
                name="Patricio_14Rgb" 
                userName="P14rgb" 
            />

            <TwitterFollowCard {...ddTech }/>
            
            <TwitterFollowCard>
                Some name
            </TwitterFollowCard>
            
            <TwitterFollowCard 
                name="Mr. Roshi" 
                userName="MrRoshi92" 
            />

            <TwitterFollowCard 
                name="DeepCool" 
                userName={userName} 
            />
            
            <TwitterFollowCard 
                name="Aerocool" 
                userName="AerocoolGlobal" 
            />

            <button onClick={ () => {
                setUserName('unknown')
                console.log('Render ?');
            }}>
                Cambiar nombre
            </button> 
            */}
        </section>
    )
}