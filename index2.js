const curlToPostman = require('curl-to-postmanv2'),
  Collection = require('postman-collection').Collection;

let curlRequests = [
  `curl -X GET \
  'http://postman-echo.get?foo=bar&batman=joker' \
  -H 'Postman-Token: 1a88e7fd-5b67-434c-aaf8-90ed9bfc3d46' \
  -H 'cache-control: no-cache' \
  -H 'content: application/json'`,

  `curl -X POST \
  http://postman-echo.com/post \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: e6a3a3d7-4a55-4dd8-a080-6ad7e425a9b0' \
  -H 'cache-control: no-cache' \
  -d '{
	a: 1,
	b: 2
  }'`],
  collection = new Collection();

Promise.all(curlRequests.map((curl) => {
  return new Promise((resolve, reject) => {
    curlToPostman.convert({ type: 'string', data: curl }, (err, result) => {
      if (err) {
        return reject(err);
      }

      collection.items.add({ name: result.output[0] && result.output[0].data.name, request: result.output[0] && result.output[0].data });

      return resolve();
    });
  });
}))
  .then(() => {
    console.log(JSON.stringify(collection.toJSON()));
  })
  .catch((err) => {
    console.log(err);
  });