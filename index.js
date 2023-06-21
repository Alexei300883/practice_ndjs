const http = require("http");
const url = require("url");



const fetchWeater = (city) => {
  console.log(city, "ciyu");
  const myAPIKey = process.env.myKey;
  const url = `http://api.weatherstack.com/current?access_key=${myAPIKey}&query=${city}`;
  http
    .get(url, (res) => {
      const { statusCode } = res;
      if (statusCode !== 200) {
        console.log(`statusCode: ${statusCode}`);
        return;
      }
      res.setEncoding("utf8");
      let rowData = "";
      res.on("data", (chunk) => (rowData += chunk));
      res.on("end", () => {
        let parseData = JSON.parse(rowData);
        console.log(parseData);
  });
    })
    .on("error", (err) => {
      console.error(err);
    });
};

// const getWather = () => {
//   return (
//     `<p class="text-left">Сегодня в ${parseData.location.name} ${parseData.current.temperature} градуса</p>
// <p class="text-left">скорость ветра ${parseData.current.wind_speed} м/с влажность ${parseData.current} видимость${parseData.current}</p>`
//     )
// }

const getFormCreateComponent = () => `
  <form 
    method="POST"
    action="/"
  >
  <input
    name="count"
    type="text"
    required
  />
    <button
      class="btn btn-sm btn-success"
      type="submit"
    >
      создать
    </button>
  </form>
`;

const layoutStart = `
  <link
    rel="stylesheet" 
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" 
    crossorigin="anonymous"
  />
    <div class="container pt-5">
`;

const layoutEnd = `</div>`;

const server = http.createServer((req, res) => {
  const urlParsed = url.parse(req.url, true);
  const { pathname, query } = urlParsed;
  const { method } = req;

  res.setHeader("Content-Type", "text/html; charset=utf-8;");

  if (pathname === "/" || pathname === "/index") {
    if (method === "GET") {
      res.write(layoutStart);
      res.write(`<h2>Новая запись</h2>`);
      res.write(getFormCreateComponent());
      res.write(layoutEnd);
    } else if (method === "POST") {
      let body = [];
      req
        .on("data", (chunk) => {
          body.push(chunk);
        })
        .on("end", () => {
          body = Buffer.concat(body).toString().split("=")[1];
          fetchWeater(body)
        });

      res.statusCode = 302;
      res.setHeader("Location", "/");
    }
  } else {
    res.statusCode = 404;
    res.write(layoutStart);
    res.write(`<h2>404 | Страница не найдена</h2>`);
    res.write(layoutEnd);
  }

  res.end();
});

const PORT = process.env.PORT || 3000;
server.listen(PORT);
