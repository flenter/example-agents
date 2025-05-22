```txt
bun install
bun run dev
```

```txt
bun run cf-typegen
```

Pass the `CloudflareBindings` as generics when instantiation `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()
```

## MCP Server

### What is a Remote MCP Server?

It is a "website".

- Websites have documents and buttons
- MCP servers have tools, prompts, and resources