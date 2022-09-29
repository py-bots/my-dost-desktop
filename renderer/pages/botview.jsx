import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {getAllBots,addBot} from '../components/db-components.js';


function BotDisplay()
{
    const [bots, setBots] = React.useState([]);

    React.useEffect(() => {
        getAllBots().then(bots => {
            console.log("Inside Use effect for bot display" + bots);
            setBots(bots);
        });
    })

   return (
    <React.Fragment>
      <ul className="list-group">
        {this.state.listitems.map(bots => (
          <li className="list-group-item list-group-item-primary">
            {bots}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

function addBotForm(handleAddBot, setName, setId)
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
function BotView()
{
    const [name, setName] = React.useState('');
    const [id, setId] = React.useState('');
    const handleAddBot = async (e) =>  {
        e.preventDefault();
        if (name && id) {
            const resp =  await addBot({name, id});
            console.log("response1331 "+ resp);
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
            {BotDisplay()}
            {addBotForm(handleAddBot, setName, setId)}
        </React.Fragment>
    );
}

export default BotView; 