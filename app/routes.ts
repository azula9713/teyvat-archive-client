import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

// Different IDs to avoid conflicts with the same layout component

export default [
  layout("./components/layout/container/baseLayout.tsx", { id: "base" }, [
    index("./routes/home.tsx"),
  ]),
  ...prefix("character", [
    layout(
      "./components/layout/container/baseLayout.tsx",
      { id: "character_base" },
      [route(":uniqueId", "./routes/character.tsx")]
    ),
  ]),
] satisfies RouteConfig;
