import { useParams } from "react-router-dom";
import { TwitchEmbed } from "react-twitch-embed";
interface ParamTypes {
  Name: string;
}
export const LiveStream = () => {
  const { Name } = useParams<ParamTypes>();
  return (
    <div className="streamWrapper">
      <div className="twitchEmbed">
        <TwitchEmbed
          id="twitchEmbed"
          channel={Name}
          theme="dark"
          width="100%"
          height="100%"
          muted
          withChat={false}
          onVideoPause={() => console.log(":(")}
        />
      </div>
    </div>
  );
};
