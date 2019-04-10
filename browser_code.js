fetch(`https://mighty-island-64939.herokuapp.com/${window.location.href.match(/([^/])*$/)[0]}`)
    .then(response => {
        return response.json();
    })
    .then(data => {

        if (data.noting_found) {
            $('main').append(`<div class="details-row" style="padding: 3em; background: #DDD; border: 5px solid #333; margin-bottom: 1em;">${data.response}</div>`);
            throw data.response;
        }


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

                // Not great practice, but we know jQuery is available on Discovery details pages
                $('main').append(`<div style="padding: 3em; background: #DDD; border: 5px solid #333">${text}</div>`);
            })
            .catch(error => console.error(error));

    })
    .catch(error => console.error(error));

