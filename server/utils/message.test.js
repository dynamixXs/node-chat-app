var expect = require("expect");

var {generateMessage, generateLocationMessage} = require("./message")

describe("generateMessage", () => {
    it("should generate correct message object", () =>{
        var from = "jen";
        var text = "Some message";
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe("number");
        expect(message).toMatchObject({from, text})
    });
})

describe("generateLocationMessage", () => {
    it("should generate correct location object", () => {
        var from = "Debby";
        var latitude = 12;
        var longitude = 20;
        var url = "https://www.google.com/maps?q=12,20";
        var message = generateLocationMessage(from, latitude, longitude);
        expect(typeof message.createdAt).toBe("number");
        expect(message).toMatchObject({from, url})
    })
})