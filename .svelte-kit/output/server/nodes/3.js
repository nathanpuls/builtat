

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.7iAPIV6n.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.JshZZgqg.js"];
export const stylesheets = [];
export const fonts = [];
