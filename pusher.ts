import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1531782",
  key: "0251d09f35ac1d6ea41f",
  secret: "a91c0db80f8bb61ad176",
  cluster: "ap2",
  useTLS: true,
});
export const clientPusher = new ClientPusher("0251d09f35ac1d6ea41f", {
  cluster: "ap2",
});
