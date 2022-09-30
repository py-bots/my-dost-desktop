import React, { version } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {getAllBots,addBot} from '../components/db-components.js';
import { REACT_LOADABLE_MANIFEST } from 'next/dist/shared/lib/constants.js';


function BotDisplay(reloadtrigger)
{
    const [botsAct, setBots] = React.useState([]);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        getAllBots().then(bots => {
            console.log("bots "+ bots);
            if (bots.error) {
                setError(bots.error);
                setBots( ["error"]);
              } else {
                setBots(bots);
              }
           
        });
    },[/*reloadtrigger // although this just keeps triggering timely*/]);

   return (
    <React.Fragment>
      <ul className="list-group">
        {botsAct.map(botsAct => (
          <li className="list-group-item list-group-item-primary">
            {botsAct.id + "  " + botsAct.name}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

function addBotForm(handleAddBot, setName, setId  )
{
    return <form className='mt-1 w-full flex-wrap flex justify-center' onSubmit={handleAddBot}>
        <input
        type='text'
        name='botName'
        placeholder='name of the bot'
        className='input'
        onChange={(e) => setName(e.target.value)}
        validate />
        <input
        type='text'
        name='botid'
        placeholder='Id for the bot'
        className='input'
        onChange={(e) => setId(e.target.value)} />
        <button
        type='submit'
        className='btn-blue'
        >
        Add Bot
        </button>
    </form>;
}
function BotView(reloadtrigger)
{
    const [name, setName] = React.useState('');
    const [id, setId] = React.useState('');
    var reloadtrigger = React.useState(false);
    const handleAddBot = async (e) =>  {
       
        if (name && id) {
            const resp =  await addBot({name, id});
            if(resp)
            {
                setName('');
                setId('');
                console.log("reloadtrigger changed");
                reloadtrigger = !reloadtrigger;
                
                
            }
            
            
        }
    };

    return (
        <React.Fragment>
            <Head>
                <title>Bot View</title>
            </Head>
            <div className='mt-1 w-full flex-wrap flex justify-center'>
                <Link href='/next'>
                    <a className='btn-blue'>Go to next page</a>
                </Link>
                <Link href='/editor'>
                    <a className='btn-blue'>Go to Editor</a>
                </Link>
            </div>
            {BotDisplay(reloadtrigger)}
            {addBotForm(handleAddBot, setName, setId )}
        </React.Fragment>
    );
}

export default BotView; 