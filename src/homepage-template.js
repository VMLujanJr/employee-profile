const renderTemplate = () => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle}</title>
    <link rel="stylesheet" href="./output.css" />
</head>
<body class="relative min-h-screen">
    <header>
        <h1 class="bg-blue-900 text-slate-100 text-center text-4xl p-5">My Team's Portfolios</h1>
    </header>
    <main class="flex flex-wrap justify-center">
        ${generatePortfolios(data)}
    </main>
    <footer class="absolute inset-x-0 bottom-0 text-center">
        <h3>&copy; ${new Date().getFullYear()} by <a href="https://github.com/${github}">${github}</a></h3>
    </footer>
</body>
</html>
    `;
};

const generatePortfolios = () => {
    return `
        <div class="flex flex-col bg-slate-200 m-5 drop-shadow-lg rounded-b" id="profile">
            <div class="bg-blue-500 text-slate-100 text-xl text-center rounded-t" id="employee-information">
                <div id="employee-name">${employeeName}</div>
                <div id="employee-title">${employeeTitle}</div>
            </div>
            <div class="p-5 rounded-b" id="container">
                <div id="employee-details">
                    <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="ID#">${employeeId}</div>
                    <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-phone">${employeeNumber}</div>
                    <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-github">${employeeGithub}</div>
                    <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-github"><a href="https://github.com/${github}" target="_blank">${github}</a></div>
                    <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-email"><a href="mailto:${employeeEmail}">${employeeEmail}</a></div>
                </div>
            </div>
        </div>
    `
};

module.exports = renderTemplate;