import AppLayout from "../components/Layout/AppLayout";
import Title from "../components/shared/Title";
function Chats() {
  return (
    <div>
      <Title title="chatterbox || chat" description="this is chat page" />
      <h1>chat</h1>
    </div>
  );
}

export default AppLayout()(Chats);
