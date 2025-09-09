const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Ac69DbayddJOk7J9taESBmohUgefiY1OvZ1Yn5cupukk5JftYFlYUizPnAXmPIf1cyBkX5zCqneaoqo_",
  client_secret: "EFjDgtt_hWiSlUd9OswyHFSZyIz0s1NZd6JbZF3kCY5KBjPfuoAH3siJrQJCjjDHV6AJZpcQG_ZO0HYE",
});

module.exports = paypal;
