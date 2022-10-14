import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from "next/dynamic";

const BlocklyWorkspace = dynamic(
  () => import('react-blockly').then((mod) => mod.BlocklyWorkspace),
  { ssr: false }
)
import ConfigFiles from '../editor/constants'

function Next() {
  const [xml, setXml] = useState(ConfigFiles.INITIAL_XML);
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-javascript-tailwindcss)</title>
      </Head>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <Link href='/home'>
          <a className='btn-blue'>Go to home page</a>
        </Link>

      </div>
      <BlocklyWorkspace
        className="h-screen" // you can use whatever classes are appropriate for your app's CSS
        toolboxConfiguration={ConfigFiles.INITIAL_TOOLBOX_JSON} // this must be a JSON toolbox definition
        initialXml={xml}
        onXmlChange={setXml}
      />
    </React.Fragment>
  )
}

export default Next;
