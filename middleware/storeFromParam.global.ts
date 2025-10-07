import { generateEnduraAppLink } from "~/lib/utils";

export default defineNuxtRouteMiddleware(async (to) => {
  const from = to.query.from as string | undefined;
  const appContextStore = useAppContextStore();

  if (from && import.meta.client) {
    const splitFrom = from.split("__");

    if (splitFrom.length < 3) return;

    const decryptedUrl = await generateEnduraAppLink(
      decodeURIComponent(splitFrom[0]),
      decodeURIComponent(splitFrom[1]),
      decodeURIComponent(splitFrom[2]),
    );
    appContextStore.set(decodeURIComponent(decryptedUrl));
  }
});
