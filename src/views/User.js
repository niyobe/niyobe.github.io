import React from 'react';
import { Link } from 'react-router-dom';

import config from '../util/configure';



const User = () => {
  const [title, setTitle]                     = React.useState(''),
        [description, setDescription]         = React.useState(''),
        [url, setUrl]                         = React.useState(''),
        [response, setResponse]               = React.useState(''), 
        [is_server_active, setIsServerActive] = React.useState(false);

  async function request () {
    if (url.length > 0) {
      try {
        const res = await fetch(url + '/users', {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            title: title,
            description: description
          }),
          mode: 'cors'
        });

        setResponse(JSON.stringify(await res.json()));
      }
      catch (e) {
        console.log(e);
      }
    }
  }


  async function checkServer () {
    setIsServerActive(false);

    if (url.length > 0) {
      try {
        const res = await fetch(url + '/users', {
          method: 'post',
          mode: 'cors'
        });

        if(Math.floor(await res.status/100) === 2)
          setIsServerActive(true);
      }
      catch (e) {
        setIsServerActive(false);
      }
    }
  }


  function _h_setTitle (e) {
    setTitle(e.target.value);
  }

  function _h_setDescription (e) {
    setDescription(e.target.value);
  }
  
  function _h_setUrl (e) {
    setUrl(e.target.value);
  }

  return (
    <div>
      <p>User Access</p>

      <div className="row justify-content-center" style={{ marginLeft: "auto", marginRight: "auto", width: "100%", maxWidth: "480px"}}>
        <div className="col-12"><div className="bg-dark text-light rounded py-1" style={{ margin: "0.5rem auto 0.5rem auto" }}>Fetch Test Tool</div></div>

        <div className='col-4' />
        <div className="col-8">
          {
            is_server_active ?
              <div className="text-success"><small>status: online</small></div>
              : <div className="text-danger"><small>status: offline</small></div>
          }
        </div>

        <div className="col-4"><label className="w-100 text-right" htmlFor="url">Host : </label></div>
        <div className="col-8"><input className="w-100"  type="text" id="url" name="url" value={url} onChange={_h_setUrl} onBlur={checkServer}/></div>

        <div className="col-4"><label className="w-100 text-right" htmlFor="title">Title : </label></div>
        <div className="col-8"><input className="w-100" type="text" id="title" name="title" value={title} onChange={_h_setTitle} /></div>

        <div className="col-4"><label className="w-100 text-right" htmlFor="description">Description : </label></div>
        <div className="col-8"><textarea className="w-100" name="description" id="description" value={description} onChange={_h_setDescription} /></div>

        <div className="col-12">
          <button className="w-100 btn btn-sm btn-dark" type="button" onClick={request} style={{ margin: "0.5rem auto 0.5rem auto" }}>Submit</button>
        </div>
      </div>

      <div className="row justify-content-center" style={{ marginLeft: "auto", marginRight: "auto", width: "100%", maxWidth: "480px"}}>
        <div className="col-12">
          <div className="border p-2" style={{ minHeight: "30px"}}>
              {(response.length > 0) ?
                <div className="text-wrap">{response}</div>
                : <div className="text-wrap">Submit and You can see the response</div>
              }            
          </div>          
        </div>        
      </div>
    </div>
  );
}

export default User;