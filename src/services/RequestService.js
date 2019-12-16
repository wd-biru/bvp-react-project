export function postService(url, data, callback,loginError) {
    (async () => {
        const options = {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: data
        };
      const response = await fetch(url, options)
        const json = await response.json();
        return json
    })().then(callback).catch(loginError);
  
}

export function getService(url, params, callback,loginError) {
  (async () => {
      const options = {
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET"
      };
      var esc = encodeURIComponent;
      var query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');
   
    const response = await fetch(url + "?" + query,options)
      const json = await response.json();
      return json
  })().then(callback).catch(loginError);

}