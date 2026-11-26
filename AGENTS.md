<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- All site copy (bio, projects, UI labels) lives in `src/lib/profile.ts` as `{ it, en }` pairs; components pick the active language via `useLang()` from `src/lib/i18n.tsx`. Why: one place to edit content and both languages always stay in sync.
- The language choice is client-side (localStorage, read after hydration); SSR always renders Italian. Why: avoids hydration mismatches without duplicating routes per language.
- Skill items support invariant tool names and localized IT/EN labels; resolve localized items before display so general abilities translate without changing product names.
- The shared header restores theme preferences only after hydration and toggles the root dark class; persist explicit choices in browser storage and otherwise follow the system preference, including live changes. Why: all pages share the semantic CSS theme without SSR mismatches.
- Projects can have an ongoing status instead of a year; render the localized status in the project list. Why: unfinished projects must not imply an unverified completion date.
- Use the reusable FadeWords presentation component for staggered introductory text and animate theme changes by transitioning registered color tokens on the root (never per-element color transitions); disable both under reduced motion. Why: per-element color transitions compound through nested text in Safari/iOS, making the fade far slower than intended.
