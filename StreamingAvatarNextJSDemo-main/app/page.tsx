"use client";

import StreamingAvatar from "@/components/StreamingAvatar";
import StreamingAvatarCode from "@/components/StreamingAvatarCode";
import { Tab, Tabs } from "@nextui-org/react";

export default function App() {
  const tabs = [
    {
      id: "demo",
      label: "Demo",
      content: <StreamingAvatar />,
    },
    // {
    //   id: "code",
    //   label: "Code",
    //   content: <StreamingAvatarCode />,
    // },
  ];

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-[900px] flex flex-col items-start justify-start gap-5 mx-auto pt-4 pb-20">
        <div className="w-full">
        <StreamingAvatar />
        </div>
      </div>
    </div>
  );
}
