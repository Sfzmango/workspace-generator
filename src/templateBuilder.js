const fs = require("fs");

function templateBuilder(allManager, allEng, allInt) {
    let finalCards = '';
    if (allManager.length > 0) {
        //this is an object with keys
        for (elem of allManager) {
            let newCards = `<div class="card text-white bg-dark m-5 p-3" style="max-width: 20rem;">
    <div class="card-header fs-3">${elem.name}
        <h6 class="card-subtitle mb-2 text-muted">Role: ${elem.role}</h6>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:${elem.id}</li>
            <li class="list-group-item">Email:${elem.email}</li>
            <li class="list-group-item">Office Number:${elem.officeNumber}</li>
        </ul>
    </div>
</div>
    `
            finalCards += newCards
        }

        if (allEng.length > 0) {
            //this is an object with keys
            for (elem of allEng) {
                let newCards = `<div class="card text-white bg-dark m-5 p-3" style="max-width: 20rem;">
        <div class="card-header fs-3">${elem.name}
            <h6 class="card-subtitle mb-2 text-muted">Role: ${elem.role}</h6>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID:${elem.id}</li>
                <li class="list-group-item">Email:${elem.email}</li>
                <li class="list-group-item">Github:${elem.github}</li>
            </ul>
        </div>
    </div>
        `
                finalCards += newCards
            }

            if (allInt.length > 0) {
                //this is an object with keys
                for (elem of allInt) {
                    let newCards = `<div class="card text-white bg-dark m-5 p-3" style="max-width: 20rem;">
            <div class="card-header fs-3">${elem.name}
                <h6 class="card-subtitle mb-2 text-muted">Role: ${elem.role}</h6>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID:${elem.id}</li>
                    <li class="list-group-item">Email:${elem.email}</li>
                    <li class="list-group-item">School:${elem.school}</li>
                </ul>
            </div>
        </div>
            `
                    finalCards += newCards
                }

                let finalPage = `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Workspace Generator</title>
</head>

<body>

    <div class="jumbotron jumbotron-fluid bg-dark text-white text-center p-3">
        <div class="container">
            <h1 class="display-4">Workspace Generator</h1>
        </div>
    </div>

    <div class="container">
        <div class="card-deck justify-content-around row m-3" id="employeeCards">

                ${finalCards}


        </div>
    </div>
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
</body>

</html>`
                fs.writeFile('./index.html', finalPage, function (error) {
                    console.error(error)
                })
            }
        }
    }
}
module.exports = templateBuilder;