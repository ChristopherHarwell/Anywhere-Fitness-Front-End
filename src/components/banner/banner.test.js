import React from "react";
import Banner from "./banner.js";
import { render } from "@testing-library/react";

test("Banner Renders Successfully", () => {
  const container = render(Banner);
});
