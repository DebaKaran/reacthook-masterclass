import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import AboutTab from "./AboutTab";
import PostsTab from "./PostsTab";
import ContactTab from "./ContactTab";

type Tab = "about" | "posts" | "contacts";
const UseTransitionDemo = () => {
  const [tab, setTab] = useState<Tab>("about");
  const [isPending, startTransition] = useTransition();
  const selectTab = (newTab: Tab) => {
    if (newTab === "posts") {
      startTransition(() => setTab(tab));
    }
    setTab(newTab);
  };

  return (
    <>
      <div>
        <TabButton
          title="About"
          onClick={() => selectTab("about")}
          variant={tab === "about" ? "primary" : "secondary"}
          size={"sm"}
        >
          About{" "}
        </TabButton>
        <TabButton
          title="Posts"
          onClick={() => selectTab("posts")}
          variant={tab === "posts" ? "primary" : "secondary"}
          size={"sm"}
        >
          Posts
        </TabButton>

        <TabButton
          title="Contacts"
          onClick={() => selectTab("contacts")}
          variant={tab === "contacts" ? "primary" : "secondary"}
          size={"sm"}
        >
          Contacts
        </TabButton>
      </div>
      {tab === "about" && <AboutTab />}
      {tab === "posts" &&
        (isPending ? (
          <div className="text-gray-500 italic">Loading Posts...</div>
        ) : (
          <PostsTab />
        ))}
      {tab === "contacts" && <ContactTab />}
    </>
  );
};

export default UseTransitionDemo;
