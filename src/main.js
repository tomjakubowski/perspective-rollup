import perspective from "@finos/perspective"
import perspective_viewer from "@finos/perspective-viewer"

import SERVER_WASM from "@finos/perspective/dist/wasm/perspective-server.wasm";
import CLIENT_WASM from "@finos/perspective-viewer/dist/wasm/perspective-viewer.wasm";

console.log('server wasm', await SERVER_WASM());
console.log('client wasm', await CLIENT_WASM());


await Promise.all([
  SERVER_WASM().then((wasm) => perspective.init_server(wasm)),
  CLIENT_WASM().then((wasm) => perspective_viewer.init_client(wasm))
])

// const worker = await perspective.worker();
// await worker.table({"a": [1,2,3,4]}, { name: "A"});

document.querySelector('perspective-viewer').load({"a": [1,2,3,4]})

