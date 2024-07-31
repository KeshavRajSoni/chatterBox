import AppLayout from "../components/Layout/AppLayout";
import Title from "../components/shared/Title";
function Home() {
  return (
    <div>
      <Title title="chatterbox || Home" description="this is chat page" />
      <h1>Home</h1>
    </div>
  );
}

export default AppLayout()(Home);
