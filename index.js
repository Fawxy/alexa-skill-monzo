var Alexa = require('alexa-sdk');
// var http = require('http');

const skillName = "Monzo";
const APP_ID = "amzn1.ask.skill.921865d4-cbe7-48b0-afc7-d1b299b9c204";
const monzoAPIHost = "https://api.monzo.com";

var handlers = {
  "GetBalance": function () {
    // var getAccountOptions = {
    //   host: monzoAPIHost,
    //   path: '/accounts'
    //   method: 'GET'
    //   headers: {}
    // }
    var speechOutput = "Hello from" + skillName + "!"
    this.emit(":tell", speechOutput);
  },

  "GetSpending": function() {
    var speechOutput = "Hello from" + skillName + "!"
    this.emit(":tell", speechOutput);
  },

  "AMAZON.HelpIntent": function() {
    var speechOutput = "";
    speechOutput += "Here are some things you can say: ";
    speechOutput += "What's my balance? ";
    speechOutput += "How much have I spent today? ";
    speechOutput += "You can also say stop if you're done. ";
    speechOutput += "So how can I help?";
    this.emit(':ask', speechOutput, speechOutput);
  },

  "AMAZON.StopIntent": function() {
    var speechOutput = "Goodbye";
    this.emit(':tell', speechOutput);
  },

  "AMAZON.CancelIntent": function() {
    var speechOutput = "Goodbye";
    this.emit(':tell', speechOutput);
  },

  "LaunchRequest": function() {
    var speechText = "";
    speechText += "Welcome to " + skillName + ".  ";
    speechText += "You can ask a question like, what's my balance or how much did I spend today.  ";
    var repromptText = "What will it be?";
    this.emit(':ask', speechText, repromptText);
  }
}

exports.handler = function (event, context) {
  var alexa = Alexa.handler(event, context);
  alexa.appId = "amzn1.echo-sdk-ams.app." + APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
