import { PromptRegistration } from "./types.js";

export const registerComparePipelines: PromptRegistration = (server) => {
  server.prompt(
    "compare-pipelines",
    "Compare different pipelines and their stages",
    {},
    () => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: "Please list all pipelines in my Pipedrive account and compare them by showing the stages in each pipeline.",
          },
        },
      ],
    })
  );
};
