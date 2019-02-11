import React, { useState } from "react";
import { TabBar, Tab } from "@rmwc/tabs";
import "@material/tab-bar/dist/mdc.tab-bar.css";
import "@material/tab/dist/mdc.tab.css";
import "@material/tab-scroller/dist/mdc.tab-scroller.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.css";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activateCount, setActivateCount] = useState(0);

  const handleActivate = evt => {
    setActivateCount(count => count + 1);
    setActiveTab(evt.detail.index);
  };

  if (activeTab === 2) {
    return <p>No tabs here.</p>;
  }

  const content = [<p>Page 1</p>, <p>Page 2</p>, <p>Page 3</p>];
  return (
    <>
      <TabBar activeTabIndex={activeTab} onActivate={handleActivate}>
        <Tab id="1">One</Tab>
        <Tab id="2">Two</Tab>
        <Tab id="3">Three</Tab>
      </TabBar>

      {content[activeTab]}

      <p>Activate count: {activateCount}</p>
    </>
  );
};

export default App;
