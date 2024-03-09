

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.93An4rsE.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.JshZZgqg.js","_app/immutable/chunks/paths.pKCLgvaU.js"];
export const stylesheets = ["_app/immutable/assets/2.5VDpL-2k.css"];
export const fonts = [];
