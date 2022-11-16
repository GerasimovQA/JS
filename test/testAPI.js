var test = require('selenium-webdriver/testing');
var assert = require('assert');


test.describe('API REQUESTS', function () {

    test.it("Get", async function () {
        let response = await fetch("https://reqres.in/api/users/2");
        assert.equal(response.status, 200, "Response has bad status")
        let json = await response.json();
        assert.equal(json.data.email, "janet.weaver@reqres.in", "Email is wrong")
    })
    test.it("Post", async function () {
        userName = "Neo"
        userJob = "THE ONE"
        requestBody = { "name": userName, "job": userJob }
        let response = await fetch("https://reqres.in/api/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        assert.equal(response.status, 201, "Response has bad status")
        let json = await response.json();
        assert.equal(json.name, userName, "Name is wrong")
        assert.equal(json.job, userJob, "Job is wrong")
    })
    test.it("Put", async function () {
        userName = "Neo"
        userJob = "THE ONE"
        requestBody = { "name": userName, "job": userJob }
        let response = await fetch("https://reqres.in/api/users/2", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        assert.equal(response.status, 200, "Response has bad status")
        let json = await response.json();
        assert.equal(json.name, userName, "Name is wrong")
        assert.equal(json.job, userJob, "Job is wrong")
        assert.notEqual(json.updatedAt, "0", "Time is wrong")
    })

    test.it("Delete", async function () {
        let response = await fetch("https://reqres.in/api/users/2", {
            method: 'DELETE',
        });
        assert.equal(response.status, 204, "Response has bad status")
        let responseText = await response.text();
        assert.equal(responseText, "", "Response is wrong")
    })
})