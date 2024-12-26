import "./App.css";
import "./index.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (username) => `@${username}`;

  // Could also use an element like <span> to format the username directly and send it to the component
  // since react renders elements. The components -> elements and react -> elements

  return (
    <section className="tw-followCardContainer">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="nach0gomez"
        // isFollowing={true}
      >Nacho Gómez</TwitterFollowCard>

      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="kikobeats"
        // isFollowing={false}
      >kikobeats</TwitterFollowCard>
      
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="test2"
        // isFollowing
      >test2</TwitterFollowCard>
    </section>
  );
}
