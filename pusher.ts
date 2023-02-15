import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
});
export const clientPusher = new ClientPusher("", {
  cluster: "ap2",
});
