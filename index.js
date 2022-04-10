
(async () => {
    const axios = require("axios")
    const lodash = require("lodash")
    const URL = "http://localhost:2626"
    const model_res = await axios.post(URL, {
        model: "model",
        method: "read",
        system: "admin"
    })
    const models = model_res.data.data


    let example_model = lodash.sample(models)
    let res = await axios.post(URL, {
        model: "room",
        method: "read",
        system: "admin"
    })

    console.log(res.data);
})()


