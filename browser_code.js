fetch(`https://mighty-island-64939.herokuapp.com/${window.location.href.match(/([^/])*$/)[0]}`)
    .then(response => response.json())
    .then(data => {

        fetch('https://vast-lowlands-86122.herokuapp.com/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ guides: data })
        })
            .then(response => response.text())
            .then(text => {
                console.log(text);

                // Not great practice, but we know jQuery is available on Discovery details pages
                $('main').append(`<div style="padding: 3em; background: #DDD; border: 5px solid #333">${text}</div>`);
            })
            .catch(error => console.error(error));

    })
    .catch(error => console.error(error));

