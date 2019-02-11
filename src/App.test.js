import React from "react";
import { render, fireEvent, waitForElement } from "react-testing-library";
import App from "./App";

it("renders with the correct activate count", async () => {
  const { getByText } = render(<App />);
  const tab = getByText("Two");
  fireEvent.click(tab);
  await waitForElement(() => getByText("Page 2"));
  // There is an initial onActivate fired even
  // though we are passing in the active tab index
  getByText("Activate count: 1");
});

it("should not crash", async () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText("Three"));
  // Any raf/setTimeout calls before the test finishes
  // will cause a crash as the tab is no longer mounted but
  // onActivate is causing an internal state update
  await new Promise(resolve => requestAnimationFrame(resolve));
  await waitForElement(() => getByText("No tabs here."));
});
