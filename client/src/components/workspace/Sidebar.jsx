import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const chats = [
    "New Chat",
    "React Help",
    "Java OOP",
    "AI Project",
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex h-full flex-col rounded-[2rem] border border-[#B88A56]/20 bg-[#F7E7CE]/95 p-6 shadow-xl"
    >
      <div className="mb-8 flex items-center justify-between rounded-3xl bg-[#E5D4B2] p-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#6B4423]/70">Aether AI</p>
          <h2 className="text-2xl font-bold text-[#6B4423]">Workspace</h2>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6B4423] text-xl font-bold text-[#F7E7CE]">
          AI
        </div>
      </div>

      <button className="mb-6 inline-flex items-center justify-center rounded-full bg-[#6B4423] px-5 py-3 text-sm font-semibold text-[#F7E7CE] transition hover:bg-[#3f2b17]">
        + New Chat
      </button>

      <div className="space-y-3 rounded-[1.75rem] bg-[#fffdf7] p-4 shadow-sm">
        <p className="text-xs uppercase tracking-[0.25em] text-[#6B4423]/70">Recent chats</p>
        <div className="space-y-3 pt-2">
          {chats.map((chat, index) => (
            <div
              key={index}
              className={`rounded-2xl px-4 py-3 text-sm text-[#6B4423] transition ${index === 1 ? "border border-[#6B4423] bg-[#F7E7CE]" : "border border-transparent bg-[#F4E8D8]"}`}
            >
              {chat}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto space-y-4 rounded-[1.75rem] border border-[#E5D4B2] bg-[#fffdf7] p-4 shadow-sm">
  <div className="flex items-center gap-3">
    <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-[#6B4423] text-xl font-bold text-[#F7E7CE]">
      {user?.photoURL ? (
        <img
          src={user.photoURL}
          alt="Profile"
          className="h-full w-full object-cover"
        />
      ) : (
        user?.displayName?.charAt(0).toUpperCase() || "U"
      )}

    </div>
    <div>
      <p className="text-sm font-semibold text-[#6B4423]">
        {user?.displayName || "User"}
      </p>

      <p className="text-xs text-[#6B4423]/70">
        {user?.email}
      </p>
    </div>
  </div>
  <button
  onClick={async () => {
    await logout();
    navigate("/");
  }}
  className="w-full rounded-2xl border border-[#6B4423] px-4 py-3 text-sm font-semibold text-[#6B4423] transition hover:bg-[#6B4423] hover:text-[#F7E7CE]"
>
  Logout
</button>

</div>
    </motion.aside>
  );
}

export default Sidebar;
